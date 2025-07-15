// Simple math captcha
function generateCaptcha() {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    document.getElementById('captcha-question').textContent = `What is ${a} + ${b}?`;
    return a + b;
}

document.addEventListener('DOMContentLoaded', () => {
    let captchaAnswer = generateCaptcha();

    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const userAnswer = parseInt(document.getElementById('captcha-answer').value, 10);
        const status = document.getElementById('form-status');
        if (userAnswer !== captchaAnswer) {
            status.textContent = "Captcha answer is incorrect. Please try again.";
            captchaAnswer = generateCaptcha();
            document.getElementById('captcha-answer').value = '';
            return;
        }
        status.textContent = "Message sent! Thank you for reaching out.";
        this.reset();
        captchaAnswer = generateCaptcha();
    });
});