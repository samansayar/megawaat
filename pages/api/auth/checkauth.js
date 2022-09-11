export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const resApi = await fetch('https://megawaat.com/api/Login/LoginCheckMobile', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                },
                body: JSON.stringify({
                    mobile: req.body.PhoneOREmail,
                    passwordHash: req.body.password,
                    rememberMe: false,
                    userName: "",
                }),
            })
            const data = await resApi.json();
            res.status(200).json({ messsage: 'انجام شد', data });
        } catch (error) {
            console.log(error);
        }
    } else {
        res.setHeader('allow', ['POST']);
        res.status(405).json({ messsage: ` ${req.method} به مشکل خوردیم` });
    }
}