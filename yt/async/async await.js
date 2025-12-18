//85
async function course(){
    try {
        await enroll();
        await progress();
        const message = await getCertificate();

        console.log(message);
    } catch(err) {
        console.log(err);
    }
    
}

course();