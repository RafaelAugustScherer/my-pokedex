(this["webpackJsonpmy-pokedex"]=this["webpackJsonpmy-pokedex"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(9),s=n.n(r),i=(n(15),n(8)),c=n(2),m=n(3),u=n(5),p=n(4),h=(n(16),n(7)),l=n.n(h),g=n(10),k=function(e,t){return"https://upload.wikimedia.org/wikipedia/commons/thumb/".concat(t,"/Pok%C3%A9mon_").concat(e,"_Type_Icon.svg/120px-Pok%C3%A9mon_").concat(e,"_Type_Icon.svg.png")},d={fire:[k("Fire","5/56"),"rgb(255,152,63)"],water:[k("Water","0/0b"),"rgb(50,147,220)"],electric:[k("Electric","a/a9"),"rgb(251,210,1)"],dragon:[k("Dragon","a/a6"),"rgb(0,111,202)"],poison:[k("Poison","c/c4"),"rgb(182,103,207)"],psychic:[k("Psychic","a/ab"),"rgb(255,102,118)"],bug:[k("Bug","3/3c"),"rgb(132,196,0)"],normal:[k("Normal","a/aa"),"rgb(146,155,162)"],grass:[k("Grass","f/f6"),"rgb(53,190,75)"],flying:[k("Flying","e/e0"),"rgb(138,172,228)"],dark:[k("Dark","0/09"),"rgb(91,83,102)"],fairy:[k("Fairy","0/08"),"rgb(251,138,236)"],fighting:[k("Fighting","b/be"),"rgb(224,45,106)"],ghost:[k("Ghost","a/a0"),"rgb(75,107,178)"],ground:[k("Ground","8/8d"),"rgb(232,114,51)"],ice:[k("Ice","8/88"),"rgb(74,211,193)"],rock:[k("Rock","b/bb"),"rgb(200,183,134)"],steel:[k("Steel","3/38"),"rgb(90,143,163)"]},b=n(0),v=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleFavorite=function(){var e=Object(g.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState((function(e){return{isFavorite:!e.isFavorite}}));case 2:a.props.handleFavorite(t,a.state.isFavorite);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={isFavorite:a.props.isFavorite},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=this.props.pokemon,n=t.id,a=t.name,o=t.types,r=t.averageWeight,s=t.image;return Object(b.jsxs)("div",{className:"Pokemon",style:{borderColor:d[o[0]][1]},children:[Object(b.jsxs)("span",{className:"pokemon-id",children:["#",n]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:"pokemon-image",src:s,alt:"Pokemon Name"}),Object(b.jsx)("p",{className:"pokemon-name",children:a})]}),o.map((function(e,t){return Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:"type-image",src:d[e][0],alt:"Type Icon"}),Object(b.jsx)("p",{className:"pokemon-type",children:e})]},t)})),Object(b.jsxs)("div",{id:"pokemon-lower-div",children:[Object(b.jsxs)("p",{className:"pokemon-weight",children:["Avg. Weight: ",r.value," ",r.measurementUnit]}),Object(b.jsx)("i",{className:this.state.isFavorite?"bi bi-star-fill":"bi bi-star",onClick:function(){return e.handleFavorite(n)}})]})]})}}]),n}(a.Component),j=v,f=[{id:25,name:"Pikachu",types:["electric"],averageWeight:{value:6,measurementUnit:"kg"},image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",isFavorite:!0},{id:4,name:"Charmander",types:["fire"],averageWeight:{value:8.5,measurementUnit:"kg"},image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",isFavorite:!0},{id:10,name:"Caterpie",types:["bug"],averageWeight:{value:2.9,measurementUnit:"kg"},image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",isFavorite:!0},{id:23,name:"Ekans",types:["poison"],averageWeight:{value:6.9,measurementUnit:"kg"},image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",isFavorite:!0},{id:65,name:"Alakazam",types:["psychic"],averageWeight:{value:48,measurementUnit:"kg"},image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",isFavorite:!0},{id:151,name:"Mew",types:["psychic"],averageWeight:{value:4,measurementUnit:"kg"},image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",isFavorite:!0},{id:78,name:"Rapidash",types:["fire"],averageWeight:{value:95,measurementUnit:"kg"},image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",isFavorite:!0},{id:143,name:"Snorlax",types:["normal"],averageWeight:{value:460,measurementUnit:"kg"},image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",isFavorite:!0},{id:148,name:"Dragonair",types:["dragon"],averageWeight:{value:16.5,measurementUnit:"kg"},image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",isFavorite:!0}],O=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleFavorite=function(e){var t=a.state.pokemons.filter((function(t){return t.id!==e}));localStorage.setItem("myPokedex",JSON.stringify(t)),a.setState({pokemons:t})},localStorage.getItem("myPokedex")||localStorage.setItem("myPokedex",JSON.stringify(f)),a.state={pokemons:JSON.parse(localStorage.getItem("myPokedex"))},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"Pokemon-list",children:[Object(b.jsx)("h2",{className:"pokedex-title",children:"My Pokedex"}),this.state.pokemons.map((function(t){return t.isFavorite?Object(b.jsx)(j,{pokemon:t,handleFavorite:e.handleFavorite,isFavorite:!0},t.id):null})),this.props.searchedPokemons.map((function(t){return Object(b.jsx)(j,{pokemon:t,handleFavorite:e.handleFavorite,isFavorite:!0},t.id)}))]})}}]),n}(a.Component),P=function(e){var t=e.title;return Object(b.jsx)("div",{className:"App-header",children:Object(b.jsx)("h1",{children:t})})},x=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).onChange=function(t){var n=t.target.value;return e.props.onChange(n)},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(b.jsx)("input",{className:"Search-bar",type:"text",placeholder:"Pesquise por um Pok\xe9mon...",value:this.props.value,onChange:this.onChange})}}]),n}(a.Component),y=x,F=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(b.jsx)("button",{className:"Search-button",onClick:this.props.onClick,children:Object(b.jsx)("i",{className:"bi bi-search"})})}}]),n}(a.Component),S=F,N=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"Error",children:Object(b.jsx)("p",{children:"Pok\xe9mon n\xe3o encontrado"})})}}]),n}(a.Component),I=N,w=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).updateSearchValue=function(e){return a.setState({value:e})},a.isPokemonInPokedex=function(){return!!JSON.parse(localStorage.getItem("myPokedex")).find((function(e){return e.id===a.state.pokemon.id&&e.isFavorite}))},a.search=function(){a.setState({status:void 0}),fetch("https://pokeapi.co/api/v2/pokemon/".concat(a.state.value)).then((function(e){e.ok?e.json().then((function(e){var t=e.id,n=e.name,o=e.types,r=e.weight,s=e.sprites;o=o.map((function(e){return e.type.name})),a.renderSearch({id:t,name:n,types:o,averageWeight:{value:r,measurementUnit:"kg"},image:s.front_default,isFavorite:!0})})):a.setState({status:!1})})).catch((function(e){return console.log("Fetch Error: ",e.message)}))},a.renderSearch=function(e){console.log(e),a.setState({status:!0,pokemon:e})},a.pushToPokedex=function(){return a.props.funcToPush(a.state.pokemon)},a.removeFromPokedex=function(){return a.props.funcToRemove(a.state.pokemon)},a.state={status:void 0,value:"",pokemon:{}},a}return Object(m.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Search",children:[Object(b.jsx)("h2",{children:"Adicionar Pok\xe9mons"}),Object(b.jsx)(y,{onChange:this.updateSearchValue,value:this.state.searchValue}),Object(b.jsx)(S,{onClick:this.search,pokemon:this.props.pokemon}),this.state.status?Object(b.jsx)(j,{pokemon:this.state.pokemon,isFavorite:this.isPokemonInPokedex(),handleFavorite:this.isPokemonInPokedex()?this.removeFromPokedex:this.pushToPokedex}):!1===this.state.status?Object(b.jsx)(I,{}):null]})}}]),n}(a.Component),C=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).PushPokemonToList=function(t){var n=e.state.pokemonsToPush;e.setState({pokemonsToPush:[].concat(Object(i.a)(n),[t])});var a=JSON.parse(localStorage.getItem("myPokedex")),o=JSON.stringify([].concat(Object(i.a)(a),[t]));localStorage.setItem("myPokedex",o)},e.RemovePokemonFromList=function(t){var n=e.state.pokemonsToPush.filter((function(e){return e!==t}));e.setState({pokemonsToPush:n});var a=JSON.parse(localStorage.getItem("myPokedex")).filter((function(e){return e.id!==t.id}));localStorage.setItem("myPokedex",JSON.stringify(a))},e.state={pokemonsToPush:[]},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(P,{title:"PokeDex - Exercise"}),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(O,{searchedPokemons:this.state.pokemonsToPush}),Object(b.jsx)(w,{funcToPush:this.PushPokemonToList,funcToRemove:this.RemovePokemonFromList})]})]})}}]),n}(a.Component);s.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.b34b6615.chunk.js.map