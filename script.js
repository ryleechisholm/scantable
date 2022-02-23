function populatePage() {
    fetch("domain.json")
      .then((req) => req.json())
      .then((data) => {
        const header = document.querySelector(".header");
        header.innerHTML = "";
        for (const item of data) {
          keys = Object.keys(item);
          console.log(keys);
          for (i=0;i<keys.length;i++) {
              console.log(keys[i]);
              header.insertAdjacentHTML(
                  "beforeend",
                  `
                    <th>${keys[i]}</th>
                  `
              )
          }
        //   header.insertAdjacentHTML(
        //     "beforeend",
        //     `
        //     <td>${key}</td>`
        //   );
        }
      });
  }

{/* <td></td> */}