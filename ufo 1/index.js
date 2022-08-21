let x = document.querySelector("img");
        let a = document.querySelector("up1");
        let b = document.querySelector("left1");
        let c = document.querySelector("down1");
        let d = document.querySelector("right1");
        let count = -10;
        let wid = window.innerWidth;
        let hei = window.innerHeight;
        console.log(hei);
        let imgpos = x.offsetLeft;
        let imgtop = x.offsetTop;
        console.log(imgtop);

        function up() {
            if (imgtop < hei && imgtop>110) {
                count -= 10;
                imgtop -= 10;
                console.log(imgtop);
                x.style.marginTop = `${count}px`;
            }
            

        }
        function down() {
            if (imgtop<hei && imgtop<(hei-80)) {
                count += 10;
                imgtop+=10;
                console.log(imgtop);
                x.style.marginTop = `${count}px`;
            }


        }
        let count1 = -10;
        function left() {
            if (imgpos < wid && imgpos < (wid -80)) {
                count1 -= 10;
                imgpos += 10;
                console.log(imgpos);
                x.style.marginLeft = `${count1}px`;
                // console.log(count1);
            }


        }
        // let count2=10;
        function right() {
            // console.log(count1);
            if ((imgpos < wid) && (imgpos > 44)) {
                count1 += 10;
                imgpos -= 10;
                console.log(imgpos);
                x.style.marginLeft = `${count1}px`;
            }
            if (imgpos > wid) {
                imgpos -= 10;
            }

        }
        // console.log(window.innerHeight);
        // console.log(window.innerWidth);
