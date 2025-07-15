function generateCaptcha() {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    document.getElementById('captcha-question').textContent = `What is ${a} + ${b}?`;
    return a + b;
}

document.addEventListener('DOMContentLoaded', () => {
    let captchaAnswer = generateCaptcha();

    document.getElementById('contact-form').addEventListener('submit', function(e) {
        const userAnswer = parseInt(document.getElementById('captcha-answer').value, 10);
        const status = document.getElementById('form-status');
        if (userAnswer !== captchaAnswer) {
            e.preventDefault();
            status.textContent = "Captcha answer is incorrect. Please try again.";
            captchaAnswer = generateCaptcha();
            document.getElementById('captcha-answer').value = '';
            return;
        }
        status.textContent = "Sending message...";
        // Formsubmit will handle the actual email sending and redirect
    });
});