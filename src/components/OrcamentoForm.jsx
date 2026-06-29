import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function OrcamentoForm() {
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
				alert('Seu pedido de Orçamento foi enviado!');
				setFormData({ nome: '', email: '', tel: '', assunto: '', nif: '', mensagem: '' });
				setRecaptchaToken(null);
				setDisabled(true);
			} else {
				const text = await res.text();
				alert(text || 'Erro no envio do pedido de Orçamento, tente mais tarde!');
			}
		} catch {
			alert('Erro no envio do pedido de Orçamento, tente mais tarde!');
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
							placeholder="Nome"
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
							placeholder="Endereço de Email"
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
							placeholder="Telefone"
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
								Escolha uma área
							</option>
							<option value="Alimentar">Alimentar</option>
							<option value="Construção, Projectos e Equipamentos">
								Construção, Projectos e Equipamentos
							</option>
							<option value="Farmacêutica e Material Hospitalar">
								Farmacêutica e Material Hospitalar
							</option>
							<option value="Consumíveis e Equipamentos Informáticos">
								Consumíveis e Equipamentos Informáticos
							</option>
							<option value="Material de Escritório">Material de Escritório</option>
							<option value="Mobiliário de Escritório">
								Mobiliário de Escritório
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
							placeholder="NIF"
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
					placeholder="Descreva o pedido"
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
				{sending ? 'A enviar...' : 'Enviar Pedido'}{' '}
				<i className="icofont-simple-right ml-2"></i>
			</button>
		</form>
	);
}
