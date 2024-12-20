document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // フォームのデフォルト送信を防止

  // フォームからデータを取得
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;

  // 入力チェック
  if (!name || !message) {
    alert('名前とメッセージを入力してください');
    return;
  }

  // Webhook URLを指定
  const webhookURL = 'https://discord.com/api/webhooks/1319532905340473384/OHk4MNGfsknfs9KyJ2QjkcZBizcxa4zTTOWQ9BvsE2F-ROOFf1Jb1naUhFugWg0_GZI3'; // ここにWebhook URLを貼り付け

  // Webhookに送信するデータを作成
  const payload = {
    content: `名前: ${name}\nメッセージ: ${message}`
  };

  // Fetch APIを使用してデータをPOST送信
  fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  .then(response => {
    if (response.ok) {
      alert('メッセージが送信されました!');
    } else {
      alert('エラーが発生しました。');
    }
  })
  .catch(error => {
    alert('通信エラーが発生しました。');
  });
});
