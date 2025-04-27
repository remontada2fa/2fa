export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Only POST method allowed' });
    return;
  }

  try {
    const response = await fetch('https://hitools.pro/api/api2fa.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'https://hitools.pro',
        'Referer': 'https://hitools.pro/',
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
}
