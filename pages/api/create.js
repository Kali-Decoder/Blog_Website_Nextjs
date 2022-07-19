import path from "path";
import fs from "fs";
const handler = (req, res) => {
  if (req.method == "POST") {
    const { title, src, desc, date } = req.body;
    const datapath = path.join(process.cwd(), "BlogData.json");
    let data = {
      id: new Date().toISOString(),
      title,
      date,
      src,
      desc,
    };

    let readFile = fs.readFileSync(datapath, "utf-8");
    readFile = JSON.parse(readFile);
    readFile.push(data);
    let writeFile = fs.writeFileSync(datapath, JSON.stringify(readFile));

    res.status(200).json({ message: "Saved Data Successfully",isError:false });
    
    return ;
  }
};
export default handler;
