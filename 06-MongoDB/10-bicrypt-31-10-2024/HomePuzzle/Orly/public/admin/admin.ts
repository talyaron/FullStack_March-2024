import { Request, Response } from 'express';

app.get('/admin', isAdmin, (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});