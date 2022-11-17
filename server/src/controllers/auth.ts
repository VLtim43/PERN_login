const db = require("../db");
const { hash } = require("bcryptjs")
exports.getUsers = async (req: Request, res: Response) => {
  try {
    const { rows } = await db.query("select * from users");
    console.log(rows);
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    } else {
      console.log("Unexpected error", err);
    }
  }
};

exports.register = async (req: Request, res: Response) => {
 
  //@ts-ignore
  const { username, password } = req.body;

  const hashedPassword = await hash(password, 10);

  try {
    

    await db.query("insert into users(username,password) values ($1 , $2)", [
      username,
      hashedPassword,
    ]);

    //@ts-ignore
    return res.status(201).json({
      sucess: true,
      message: "The registration was succefull",
    });
  } catch (error: any) {
    console.log(error.message)
    //@ts-ignore
    return res.status(500).json({
      error: error.message
    })
  }
};

export {};
