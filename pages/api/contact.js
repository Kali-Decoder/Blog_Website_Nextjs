import path from "path";
import fs from "fs";

const handler = async (req, res) => {
  if (req.method == "POST") {
    const { email, number, query } = req.body;
    console.log(email, number, query);
    let datapath = path.join(process.cwd(), "ContactData.json");
    let readFile = fs.readFileSync(datapath, "utf-8");
    readFile = JSON.parse(readFile);
    const data = {
      id: new Date().toISOString(),
      email,
      number,
      query,
    };
    readFile.push(data);
    let writeFile= fs.writeFileSync(datapath,JSON.stringify(readFile));
    
    res.status(200).json({ message: "Added Successfully", isError: false });
  }
};

export default handler;
