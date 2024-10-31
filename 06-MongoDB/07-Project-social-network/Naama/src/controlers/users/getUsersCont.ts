export async function getUserIdCookie(req:any, res:any){
    try {
        const userId = req.cookie('userId');
        if(userId){
            res.status(200).send({ ok:true,userId:userId});
        }
    } catch (error) {
        console.error(error)
        res.status(500).send(error);
    }
}