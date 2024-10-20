import { Book } from "../../model/books/bookModel";

/*export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        console.log(email, password)

        const user = await User.findOne({ email, password });
        console.log(user)

        if (user) {
            res.cookie('userId', user._id, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 3 });
            res.status(200).send({ ok:true });
        } else {
            res.status(401).send({ error: 'אימייל או סיסמא אינם נכונים' });
        }

    } catch (error) {
        console.error(error)
        res.status(500).send(error);

    }
}*/
export async function addBook(req:any,res:any) {
    try {
        const { title, description,genre,author,privecy} = req.body
        if (!title ||!description ||!genre||!author||!privecy) throw new Error("אנה הכניסו את כל פרטי הספר")
        const book = new Book({ title, description,genre,author,privecy })
        const existingBook = await Book.findOne({ title });
        if (existingBook) {
            return res.status(400).send({ error: 'ספר קיים עם כותרת זהה' })
        }
        await book.save()
        res.status(200).send({ ok: true });
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}