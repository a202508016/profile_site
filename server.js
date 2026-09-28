const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const myProfile = {
        name: "이한율",
        studentId: "202508016",
        intro: "Node.js와 웹 프로그래밍을 배우고 있는 학생입니다.",
        skills: ["Node.js", "Express", "Linux", "Java", "Python"],
        hobbies: ["게임"]
    };

    res.render('index', { profile: myProfile });
});

app.listen(PORT, () => {
    console.log(`서버가 실행되었습니다: http://localhost:${PORT}`);
});
