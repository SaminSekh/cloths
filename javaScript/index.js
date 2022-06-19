let a = document.getElementById("male");
        let b = document.getElementById("female");
        let c = document.getElementById("femaleOptions");
        let d = document.getElementById("maleOptions");

        function femalefun() {
          if (c.style.display === "none") {
            c.style.display = "flex";
            a.style.display = "none";
          } else {
            c.style.display = "none";
            a.style.display = "flex";
          }
        }
        function malefun() {
          if (d.style.display === "none") {
            d.style.display = "flex";
            b.style.display = "none";
          } else {
            d.style.display = "none";
            b.style.display = "flex";
          }
        }
          // functions for buy now pop up
        const a1 = document.getElementById("bn");
        const a2 = document.getElementById("ordr");
        function ordrnw() {
          if (a2.style.display === "none") {
            a2.style.display = "flex";
          } else{
            a2.style.display = "none";
          }
        }
        function closefun() {
          if (a2.style.display === "flex") {
            a2.style.display = "none";
          } else{
            a2.style.display = "flex";
          }
        }