import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReCAPTCHA from 'react-google-recaptcha';

export default function OrcamentoForm() {
	const { t } = useTranslation();
	const [formData, setFormData] = useState({
		nome: '',
		email: '',
		tel: '',
		assunto: '',
		nif: '',
		mensagem: '',
	});
	const [recaptchaToken, setRecaptchaToken] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [sending, setSending] = useState(false);

	const handleChange = (e) => {
		const updated = { ...formData, [e.target.name]: e.target.value };
		setFormData(updated);
		checkValidity(updated, recaptchaToken);
	};

	const handleRecaptcha = (token) => {
		setRecaptchaToken(token);
		checkValidity(formData, token);
	};

	const checkValidity = (data, token) => {
		const valid = data.nome && data.email && data.tel && data.assunto && data.nif && token;
		setDisabled(!valid);
	};

	const handleSubmit = async () => {
		if (disabled || sending) return;
		setSending(true);

		const body = new FormData();
		body.append('nome', formData.nome);
		body.append('email', formData.email);
		body.append('tel', formData.tel);
		body.append('assunto', formData.assunto);
		body.append('nif', formData.nif);
		body.append('mensagem', formData.mensagem);
		body.append('g-recaptcha-response', recaptchaToken);

		try {
			const res = await fetch('https://santibene.com/mailer/orcamentoSantibene.php', {
				method: 'POST',
				body,
			});
			if (res.ok) {
				alert(t('orcamentoForm.successMessage'));
				setFormData({ nome: '', email: '', tel: '', assunto: '', nif: '', mensagem: '' });
				setRecaptchaToken(null);
				setDisabled(true);
			} else {
				const text = await res.text();
				alert(text || t('orcamentoForm.errorMessage'));
			}
		} catch {
			alert(t('orcamentoForm.errorMessage'));
		}
		setSending(false);
	};

	return (
		<form id="meuFormulario" className="appoinment-form" data-form>
			<div className="row">
				<div className="col-lg-6">
					<div className="form-group">
						<input
							name="nome"
							type="text"
							className="form-control"
							placeholder={t('orcamentoForm.name')}
							required
							data-form-input
							value={formData.nome}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="form-group">
						<input
							name="email"
							type="email"
							className="form-control"
							placeholder={t('orcamentoForm.email')}
							required
							data-form-input
							value={formData.email}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="form-group">
						<input
							name="tel"
							type="tel"
							className="form-control"
							placeholder={t('orcamentoForm.phone')}
							required
							data-form-input
							value={formData.tel}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="form-group">
						<select
							name="assunto"
							className="form-control"
							id="exampleFormControlSelect1"
							required
							data-form-input
							value={formData.assunto}
							onChange={handleChange}
						>
							<option value="" disabled>
								{t('orcamentoForm.chooseArea')}
							</option>
							<option value="Alimentar">{t('orcamentoForm.optionAlimentar')}</option>
							<option value="Construção, Projectos e Equipamentos">
								{t('orcamentoForm.optionConstrucao')}
							</option>
							<option value="Farmacêutica e Material Hospitalar">
								{t('orcamentoForm.optionFarmaceutica')}
							</option>
							<option value="Consumíveis e Equipamentos Informáticos">
								{t('orcamentoForm.optionIT')}
							</option>
							<option value="Material de Escritório">
								{t('orcamentoForm.optionOffice')}
							</option>
							<option value="Mobiliário de Escritório">
								{t('orcamentoForm.optionOfficeMob')}
							</option>
						</select>
					</div>
				</div>
				<div className="col-12">
					<div className="form-group">
						<input
							name="nif"
							type="text"
							className="form-control"
							placeholder={t('orcamentoForm.nif')}
							required
							data-form-input
							value={formData.nif}
							onChange={handleChange}
						/>
					</div>
				</div>
			</div>

			<div className="form-group-2 mb-4">
				<textarea
					name="mensagem"
					className="form-control"
					rows="6"
					placeholder={t('orcamentoForm.message')}
					value={formData.mensagem}
					onChange={handleChange}
				></textarea>
			</div>

			<div className="form-group-2 mb-4">
				<ReCAPTCHA
					sitekey="6LdnkuIrAAAAAInUpV9pby6Hwa3i3-wdqWOrhdL9"
					onChange={handleRecaptcha}
				/>
			</div>

			<button
				data-form-btn
				onClick={handleSubmit}
				type="button"
				disabled={disabled}
				className="btn btn-main-2 btn-round-full"
			>
				{sending ? t('orcamentoForm.sending') : t('orcamentoForm.sendOrder')}{' '}
				<i className="icofont-simple-right ml-2"></i>
			</button>
		</form>
	);
}
