"use strick";

// <------- RENDER ALL POKEMONS --------->
function renderPokemons(data) {
  if (data.length) {
    data.forEach((pokemons) => {
      const div = createElement(
        "div",
        "card rounded-2xl w-[307px] min-h-[423px] bg-white",
        `
        <div class="card-body grid place-content-center pt-[38px] pb-[68px]">
                            <img class="w-[157px] h-[157px]" src="${
                              pokemons.img
                            }" alt="#" />
                        </div>
                        <div class="card-footer pt-[20px] pl-[30px] pr-[30px] pb-[37px] border-t-2 border-black">
                            <div class="flex justify-between">
                                <div>
                                <h1 class="text-[24px] font-bold">${
                                  pokemons.name
                                }</h1>
                                <p class="text-[20px] font-medium">${
                                  pokemons.type
                                }</p>
                                </div>
                                <i class='bx bx-heart text-[30px]'></i>
                            </div>
                            <div class="box-footer flex mt-[25px]">
                                <h6 class="text-[24px] mr-[30px] font-bold">${
                                  pokemons.weight
                                }</h6>
                                <h6 class="text-[24px] font-bold">${
                                  pokemons?.candy_count
                                    ? pokemons?.candy_count
                                    : ""
                                }</h6>
                            </div>
                        </div>
        `
      );
      $(".wrapper").append(div);
    });
  }
}
renderPokemons(pokemons);
// <------- RENDER ALL POKEMONS --------->
// <------- SEARCH BY NAME -------------->

let ty = [];
pokemons.forEach((e) => {
  for (const iterator of e.type) {
    ty.push(iterator);
  }
});

const types = [...new Set(ty)];

types.forEach((v) => {
  let opt = document.createElement("option");
  opt.value = v;
  opt.textContent = v;
  $("#gross").append(opt);
});

$("#defaultSearch").addEventListener("keyup", (e) => {
  $(".wrapper").innerHTML = "";
  const filterPokemons = pokemons.filter((item) => {
    return item.name.toLowerCase().includes(e.target.value.toLowerCase());
  });

  renderPokemons(filterPokemons);
});

$("#gross").addEventListener("input", (e) => {
  let select = $("#gross").value;

  $(".wrapper").innerHTML = "";
  const filterType = pokemons.filter((e) => {
    return e.type.includes(select);
  });

  renderPokemons(filterType);
});

let origin = pokemons.sort((a, b) => {
  return a.name.localeCompare(b.name);
});
// console.log(origin)

let reverse = [...origin].reverse();

$("#search-ABC").addEventListener("change", () => {
  if ($("#search-ABC").value === "A-Z") {
    $(".wrapper").innerHTML = "";
    renderPokemons(origin);
  } else {
    $(".wrapper").innerHTML = "";
    renderPokemons(reverse);
  }
});

$("#gross").addEventListener("change", () => {
  const select = $("#gross").value;

  $(".wrapper").innerHTML = "";
  const filterType = pokemons.filter((e) => {
    return e.type.includes(select);
  });
  ``;
  renderPokemons(filterType);
});
