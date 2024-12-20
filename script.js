fetch('https://discord.com/api/webhooks/1319532905340473384/OHk4MNGfsknfs9KyJ2QjkcZBizcxa4zTTOWQ9BvsE2F-ROOFf1Jb1naUhFugWg0_GZI3', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ content: 'テストメッセージ' })
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
