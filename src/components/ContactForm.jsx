import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactForm() {
	const { t } = useTranslation();
	const [formData, setFormData] = useState({
		name: '',
		tel: '',
		email: '',
		subject: '',
		message: '',
	});
	const [recaptchaToken, setRecaptchaToken] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [sending, setSending] = useState(false);
	const [msg, setMsg] = useState({ show: false, text: '', type: '' });

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
		const valid = data.name && data.tel && data.email && data.subject && data.message && token;
		setDisabled(!valid);
	};

	const handleSubmit = async () => {
		if (disabled || sending) return;
		setSending(true);

		const body = new FormData();
		body.append('name', formData.name);
		body.append('tel', formData.tel);
		body.append('email', formData.email);
		body.append('subject', formData.subject);
		body.append('message', formData.message);
		body.append('g-recaptcha-response', recaptchaToken);

		try {
			const res = await fetch('https://santibene.com/mailer/contactoSantibene.php', {
				method: 'POST',
				body,
			});
			if (res.ok) {
				setMsg({ show: true, text: t('contactForm.successMessage'), type: 'alert-success' });
				setFormData({ name: '', tel: '', email: '', subject: '', message: '' });
				setRecaptchaToken(null);
				setDisabled(true);
			} else {
				const text = await res.text();
				setMsg({
					show: true,
					text: text || t('contactForm.errorMessage'),
					type: 'alert-danger',
				});
			}
		} catch {
			setMsg({
				show: true,
				text: t('contactForm.errorMessage'),
				type: 'alert-danger',
			});
		}
		setTimeout(() => setMsg({ show: false, text: '', type: '' }), 3000);
		setSending(false);
	};

	return (
		<form id="meuFormulario" className="contact__form" data-form>
			<div className="row">
				<div className="col-12">
					<div
						className={`alert ${msg.type} contact__msg`}
						style={{ display: msg.show ? 'block' : 'none' }}
						role="alert"
					>
						{msg.text}
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-6">
					<div className="form-group">
						<input
							name="name"
							id="name"
							type="text"
							className="form-control"
							placeholder={t('contactForm.name')}
							required
							data-form-input
							value={formData.name}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="form-group">
						<input
							name="tel"
							id="tel"
							type="tel"
							className="form-control"
							placeholder={t('contactForm.phone')}
							required
							data-form-input
							value={formData.tel}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="form-group">
						<input
							name="email"
							id="email"
							type="email"
							className="form-control"
							placeholder={t('contactForm.email')}
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
							name="subject"
							id="subject"
							type="text"
							className="form-control"
							placeholder={t('contactForm.subject')}
							required
							data-form-input
							value={formData.subject}
							onChange={handleChange}
						/>
					</div>
				</div>
			</div>

			<div className="form-group-2 mb-4">
				<textarea
					name="message"
					id="message"
					className="form-control"
					rows="8"
					placeholder={t('contactForm.message')}
					required
					data-form-input
					value={formData.message}
					onChange={handleChange}
				></textarea>
			</div>

			<div className="g-recaptcha">
				<ReCAPTCHA
					sitekey="6LdnkuIrAAAAAInUpV9pby6Hwa3i3-wdqWOrhdL9"
					onChange={handleRecaptcha}
				/>
			</div>

			<div className="text-center">
				<button
					type="button"
					className="btn btn-main btn-round-full"
					data-form-btn
					onClick={handleSubmit}
					disabled={disabled}
				>
					{sending ? t('contactForm.sending') : t('contactForm.send')}
				</button>
			</div>
		</form>
	);
}
