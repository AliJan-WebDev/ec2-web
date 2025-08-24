const email = document.getElementById('email');
const password = document.getElementById('password');

const url = 'https://535ckemjf9.execute-api.us-east-1.amazonaws.com/prod/tests';

document.querySelector('button').addEventListener('click', async (e) => {
    e.preventDefault();
    const emailValue = email.value;
    const passwordValue = password.value; // fixed typo here
try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: emailValue, password: passwordValue })
    });

    const data = await response.json();
    console.log('Success:', data);
  } catch (err) {
    console.error('Error:', err);
  }
});
