import app from './app';

const PORT = process.env.PORT || 5000;

try {
    app.listen(PORT, () => {
        console.log(`[+] Server is Listening on port : ${PORT}`);
    });
} catch (e) {
    console.error(`[#] Error : ${e}`);
}