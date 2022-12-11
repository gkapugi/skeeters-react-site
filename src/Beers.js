const beers = [
    {
        name: "A Better Hefer",
        style: "Cream Ale",
        tapID: 1,
        abv: 4.9,
        ibu: 19,
        srm: 5.1,
        gravity: "1.050-1.013",
        packaged: "1/12/2021",
        brewedBy: "Tony Kapugi",
        description: "A delightful cream ale.  Slightly sweet with corn and male with a creamy mouth feel.",
        about: "Viking 2 row and Pilsner malt, Homey malt, flaked corn and golden naked oats.  Northern Brewer hops and US-05 yeast."
    },
    {
        name: "Rebel Kent Clone",
        style: "Belgian Amber",
        tapID: 2,
        abv: 5.1,
        ibu: 24,
        srm: 16,
        gravity: "1.052-1.012",
        packaged: "4/15/2021",
        brewedBy: "Tony Kapugi",
        description: "American amber with a Belgian yeast.",
        about: ""
    },
    {
        name: "On Your Bike",
        style: "Special Bitter",
        tapID: 3,
        abv: null,
        ibu: 35,
        srm: 14.3,
        gravity: "",
        packaged: "4/20/2020",
        brewedBy: "Tony Kapugi",
        description: "Easy all day drinker.  Malty and bready with a slight hop bitterness and floral, spicy aroma.",
        about: "Simpsons Maris Otter, Carmel 120, Munich III Norhtern Brewer and East Kent Golding hops, London III yeast."
    },
    {
        name: "Den-Rods Pale Ale",
        style: "Pale Ale",
        tapID: 4,
        abv: 5.5,
        ibu: 65,
        srm: 18,
        gravity: null,
        packaged: "11/21/2020",
        brewedBy: "Tony Kapugi",
        description: "",
        about: ""
    },
    {
        name: "Rye-zenheimer",
        style: "Specialty Bock",
        tapID: 5,
        abv: null,
        ibu: null,
        srm: null,
        gravity: null,
        packaged: "3/12/2021",
        brewedBy: "Tony Kapugi",
        description: "",
        about: "Great Western-Pure Idaho Pilsner Malt, Viking rye malt, Rahr White wheat, Briess Munich 20L Cara red Malt, Caramunich III Vanguard hops, Imperial Harvest yeast"
    },
    {
        name: "Dunkelweizen",
        style: "Dunkelweizen",
        tapID: 6,
        abv: 5.3,
        ibu: 12,
        srm: 22,
        gravity: "1.052-1.012",
        packaged: "11/14/2020",
        brewedBy: "Tony Kapugi",
        description: "This dark wheat beer is a great beer to begin fall and ease into winter.",
        about: ""
    },
    {
        name: "Barrel Aged Littlefoot",
        style: "Barleywine aged in oak",
        tapID: 7,
        abv: 10.2,
        ibu: null,
        srm: null,
        gravity: "",
        packaged: "5/15/2021",
        brewedBy: "Sun Prairie Warthogs",
        description: "",
        about: ""
    },
    {
        name: "Rezenator",
        style: "Doppelbock",
        tapID: 8,
        abv: 8,
        ibu: 24,
        srm: 18,
        gravity: "1.081-1.021",
        packaged: "9/18/2022",
        brewedBy: "Tony Kapugi",
        description: "Clean, crisp, malty with a little hop bitterness to balance the malt.  Easy drinking but full bodied beer.",
        about: ""
    },
    {
        name: "Stay Golden, Pony Boy!",
        style: "British Golden Nitro",
        tapID: 9,
        abv: 4.9,
        ibu: 37,
        srm: 5.4,
        gravity: "1.047-1.011",
        packaged: "5/16/2020",
        brewedBy: "Tony Kapugi",
        description: "Firm bitterness with earthy floral aroma, nice bready mouthfeel.",
        about: "Simpson Maris Otter malt, Northern Brewer and East Kent Golding hops, london III yeast."
    },
    {
        name: "Baltic Encroachment",
        style: "Baltic Porter",
        tapID: 10,
        abv: 7.9,
        ibu: 33,
        srm: 30,
        gravity: "1.085-1.026",
        packaged: "6/12/2021",
        brewedBy: "Tony Kapugi",
        description: "Chocolate and roasted malty porter with hints of cherry and raisin.",
        about: ""
    },
    {
        name: "Sparkling water",
        tapID: 11,
        abv: 0,
        srm: 0,
    }
]

const beerNames = [];
for (let i = 0; i < beers.length; i++) {
    let name = beers[i].name;
    beerNames.push(name);
}

const beerNameList = beerNames.map((names) => 
    <li className="List-Items">{names}</li>
)

export default beerNameList;
