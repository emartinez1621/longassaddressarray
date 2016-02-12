var validAddresses = '{' +
    '"1" : [{"abbrev" : "AK", "zip" : "99507", "city" : "Anchorage", "address" : "8030 Sabrina St"}, {"abbrev" : "AK", "zip" : "99572", "city" : "Cooper Landing", "address" : "20518 Sterling Hwy"}, {"abbrev" : "AK", "zip" : "99683", "city" : "Trapper Creek", "address" : "25517 S Oilwell Rd"}]' +
    '"2" : [{"abbrev" : "AL", "zip" : "35004", "city" : "Moody", "address" : "1936 Heritage Rd"}, {"abbrev" : "AL", "zip" : "35071", "city" : "Gardendale", "address" : "1665 Quail Ridge Dr"}, {"abbrev" : "AL", "zip" : "35188", "city" : "Woodstock", "address" : "27 Old Stagecoach Rd"}]' +
    '"3" : [{"abbrev" : "AR", "zip" : "71601", "city" : "Pine Bluff", "address" : "206 Park Pl"}, {"abbrev" : "AR", "zip" : "71765", "city" : "Strong", "address" : "2666 Jones Lake Rd"}, {"abbrev" : "AR", "zip" : "71866", "city" : "Winthrop", "address" : "2601 Highway 41 N"}]' +
    '"4" : [{"abbrev" : "AZ", "zip" : "85248", "city" : "Chandler", "address" : "1515 W Honeysuckle Ln"}, {"abbrev" : "AZ", "zip" : "85310", "city" : "Glendale", "address" : "23833 N 39th Ln"}, {"abbrev" : "AZ", "zip" : "85282", "city" : "Tempe", "address" : "2019 S Granada Dr"}]' +
    '"5" : [{"abbrev" : "CA", "zip" : "93260", "city" : "Posey", "address" : "43228 Oak Dr."}, {"abbrev" : "CA", "zip" : "90210", "city" : "Beverly Hills", "address" : "1270 Shadow Hill Way"}, {"abbrev" : "CA", "zip" : "95206", "city" : "Stockton", "address" : "1708 Ralph Ave"}]' +
    '"6" : [{"abbrev" : "CO", "zip" : "80446", "city" : "Granby", "address" : "404 New Church Ave"}, {"abbrev" : "CO", "zip" : "80439", "city" : "Silverthorne", "address" : "348 Jade Rd"}, {"abbrev" : "CO", "zip" : "80701", "city" : "Fort Morgan", "address" : "22221 County Road A"}]' +
    '"7" : [{"abbrev" : "CT", "zip" : "06088", "city" : "East Windsor", "address" : "309 Scantic Rd"}, {"abbrev" : "CT", "zip" : "06237", "city" : "Columbia", "address" : "42 Hennequin Rd"}, {"abbrev" : "CT", "zip" : "06424", "city" : "East Hampton", "address" : "22 Arden Dr"}]' +
    '"8" : [{"abbrev" : "DC", "zip" : "20011", "city" : "Washington", "address" : "425 Kennedy St NE"}, {"abbrev" : "DC", "zip" : "20006", "city" : "Washington", "address" : "2030 F st NW APT 801"}, {"abbrev" : "DC", "zip" : "20024", "city" : "Washington", "address" : "800 4th St SW APT S603"}]' +
    '"9" : [{"abbrev" : "DE", "zip" : "19956", "city" : "Laurel", "address" : "101 Maple St"}, {"abbrev" : "DE", "zip" : "19736", "city" : "Yorklyn", "address" : "2255 Creek Rd"}, {"abbrev" : "DE", "zip" : "19930", "city" : "Bethany Beach", "address" : "420 Collins St"}]' +
    '"10" : [{"abbrev" : "FL", "zip" : "32003", "city" : "Orange Park", "address" : "2182 Trailwood Dr"}, {"abbrev" : "FL", "zip" : "32059", "city" : "Lee", "address" : "7236 SE Farm Rd"}, {"abbrev" : "FL", "zip" : "32082", "city" : "Jacksonville", "address" : "289 Roscoe Blvd"}]' +
    '"11" : [{"abbrev" : "GA", "zip" : "31512", "city" : "Ambrose", "address" : "774 Squire Rd"}, {"abbrev" : "GA", "zip" : "39834", "city" : "Climax", "address" : "4782 Vada Rd"}, {"abbrev" : "GA", "zip" : 30669"", "city" : "Woodville", "address" : "1071 Peachtree Ave W"}]' +
    '"12" : [{"abbrev" : "HI", "zip" : "96704", "city" : "Ocean View", "address" : "92-9193 Lehua Ln"}, {"abbrev" : "HI", "zip" : "96725", "city" : "Holualoa", "address" : "76-5989 Mamalahoa Hwy"}, {"abbrev" : "HI", "zip" : "96785", "city" : "Volcano", "address" : "19-4021 Kilauea Rd"}]' +
    '"13" : [{"abbrev" : "IA", "zip" : "50134", "city" : "Kelley", "address" : "54316 276th St"}, {"abbrev" : "IA", "zip" : "50230", "city" : "Radcliffe", "address" : "29393 Co Hwy S27"}, {"abbrev" : "IA", "zip" : "50310", "city" : "Des Moines", "address" : "2716 46th St"}]' +
    '"14" : [{"abbrev" : "ID", "zip" : "83201", "city" : "Pocatello", "address" : "3021 Shelly Pl"}, {"abbrev" : "ID", "zip" : "83246", "city" : "Lava Hot Springs", "address" : "6785 S Pheasant Dr"}, {"abbrev" : "ID", "zip" : "93440", "city" : "Rexburg", "address" : "913 S 2400 W"}]' +
    '"15" : [{"abbrev" : "IL", "zip" : "60010", "city" : "Hoffman Estates", "address" : "5105 Chambers Dr"}, {"abbrev" : "IL", "zip" : "60064", "city" : "North Chicago", "address" : "2002 16th St"}, {"abbrev" : "IL", "zip" : "60112", "city" : "Cortland", "address" : "85 E Oxford Close"}]' +
    '"16" : [{"abbrev" : "IN", "zip" : "46140", "city" : "Greenfield", "address" : "762 Berry St"}, {"abbrev" : "IN", "zip" : "46201", "city" : "Indianapolis", "address" : "442 N Denny St"}, {"abbrev" : "IN", "zip" : "46327", "city" : "Hammond", "address" : "4042 Grover Ave"}]' +
    '"17" : [{"abbrev" : "KS", "zip" : "66006", "city" : "Baldwin", "address" : "402 Fremont St"}, {"abbrev" : "KS", "zip" : "66101", "city" : "Kansas City", "address" : "843 Ivandale St"}, {"abbrev" : "KS", "zip" : "66945", "city" : "Hanover", "address" : "111 S Hanover St"}]' +
    '"18" : [{"abbrev" : "KY", "zip" : "40071", "city" : "Taylorsville", "address" : "896 Fiddler Ln"}, {"abbrev" : "KY", "zip" : "40299", "city" : "Jefferson", "address" : "10301 Grand Ave"}, {"abbrev" : "KY", "zip" : "40371", "city" : "Salt Lick", "address" : "67 Railroad St"}]' +
    '"19" : [{"abbrev" : "LA", "zip" : "70118", "city" : "New Orleans", "address" : "2632 Calhoun St"}, {"abbrev" : "LA", "zip" : "70437", "city" : "Folsom", "address" : "77050 Robinson Rd"}, {"abbrev" : "LA", "zip" : "70526", "city" : "Crowley", "address" : "814 N Avenue G"}]' +
    '"20" : [{"abbrev" : "MA", "zip" : "01005", "city" : "Barre", "address" : "400 West St"}, {"abbrev" : "MA", "zip" : "01431", "city" : "Ashby", "address" : "389 County Rd"}, {"abbrev" : "MA", "zip" : "01612", "city" : "Paxton", "address" : "349 Pleasant St"}]' +
    '"21" : [{"abbrev" : "MD", "zip" : "20639", "city" : "Huntington", "address" : "3355 Bayside Rd"}, {"abbrev" : "MD", "zip" : "20817", "city" : "Bethesda", "address" : "6007 Greentree Rd"}, {"abbrev" : "MD", "zip" : "20815", "city" : "Chevy Chase", "address" : "3536 Hamlet Pl"}]' +
    '"22" : [{"abbrev" : "ME", "zip" : "04020", "city" : "Cornish", "address" : "1704 North Rd"}, {"abbrev" : "ME", "zip" : "04347", "city" : "Halowell", "address" : "3 Second St"}, {"abbrev" : "ME", "zip" : "04681", "city" : "Stonington ", "address" : "24 Minister Field Rd"}]' +
    '"23" : [{"abbrev" : "MI", "zip" : "48001", "city" : "Clay", "address" : "6052 Swartout Rd"}, {"abbrev" : "MI", "zip" : "48072", "city" : "Berkley", "address" : "1828 Bacon Ave"}, {"abbrev" : "MI", "zip" : "49064", "city" : "Lawrence", "address" : "50355 40th Ave"}]' +
    '"24" : [{"abbrev" : "MN", "zip" : "55327", "city" : "Dayton", "address" : "16840 Dayton Rover Rd"}, {"abbrev" : "MN", "zip" : "55390", "city" : "Waverly", "address" : "2503 Elder Ave SW"}, {"abbrev" : "MN", "zip" : "55367", "city" : "New Germany", "address" : "8050 Yale Ave"}]' +
    //'"25" : [{"abbrev" : "MO", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "MO", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "MO", "zip" : "#", "city" : "#", "address" : "#"}]' +
    //'"26" : [{"abbrev" : "MS", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "MS", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "MS", "zip" : "#", "city" : "#", "address" : "#"}]' +
    //'"27" : [{"abbrev" : "MT", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "MT", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "MT", "zip" : "#", "city" : "#", "address" : "#"}]' +
    //'"28" : [{"abbrev" : "NC", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "NC", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "NC", "zip" : "#", "city" : "#", "address" : "#"}]' +
    //'"29" : [{"abbrev" : "ND", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "ND", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "ND", "zip" : "#", "city" : "#", "address" : "#"}]' +
    //'"30" : [{"abbrev" : "NE", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "NE", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "NE", "zip" : "#", "city" : "#", "address" : "#"}]' +
    //'"31" : [{"abbrev" : "NH", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "NH", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "NH", "zip" : "#", "city" : "#", "address" : "#"}]' +
  //  '"32" : [{"abbrev" : "NJ", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "NJ", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "NJ", "zip" : "#", "city" : "#", "address" : "#"}]' +
    //'"33" : [{"abbrev" : "NM", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "NM", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "NM", "zip" : "#", "city" : "#", "address" : "#"}]' +
    //'"24" : [{"abbrev" : "NV", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "NV", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "NV", "zip" : "#", "city" : "#", "address" : "#"}]' +
    //'"25" : [{"abbrev" : "NY", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "NY", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "NY", "zip" : "#", "city" : "#", "address" : "#"}]' +
    //'"26" : [{"abbrev" : "OH", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "OH", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "OH", "zip" : "#", "city" : "#", "address" : "#"}]' +
    //'"27" : [{"abbrev" : "OK", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "OK", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "OK", "zip" : "#", "city" : "#", "address" : "#"}]' +
    //'"28" : [{"abbrev" : "OR", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "OR", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "OR", "zip" : "#", "city" : "#", "address" : "#"}]' +
    //'"29" : [{"abbrev" : "PA", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "PA", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "PA", "zip" : "#", "city" : "#", "address" : "#"}]' +
    //'"30" : [{"abbrev" : "RI", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "RI", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "RI", "zip" : "#", "city" : "#", "address" : "#"}]' +
    //'"31" : [{"abbrev" : "SC", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "SC", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "SC", "zip" : "#", "city" : "#", "address" : "#"}]' +
    //'"32" : [{"abbrev" : "SD", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "SD", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "SD", "zip" : "#", "city" : "#", "address" : "#"}]' +
    //'"33" : [{"abbrev" : "TN", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "TN", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "TN", "zip" : "#", "city" : "#", "address" : "#"}]' +
    //'"34" : [{"abbrev" : "TX", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "TX", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "TX", "zip" : "#", "city" : "#", "address" : "#"}]' +
    //'"35" : [{"abbrev" : "UT", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "UT", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "UT", "zip" : "#", "city" : "#", "address" : "#"}]' +
  //  '"36" : [{"abbrev" : "VA", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "VA", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "VA", "zip" : "#", "city" : "#", "address" : "#"}]' +
    //'"37" : [{"abbrev" : "VT", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "VT", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "VT", "zip" : "#", "city" : "#", "address" : "#"}]' +
    //'"38" : [{"abbrev" : "WA", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "WA", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "WA", "zip" : "#", "city" : "#", "address" : "#"}]' +
    //'"39" : [{"abbrev" : "WI", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "WI", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "WI", "zip" : "#", "city" : "#", "address" : "#"}]' +
    //'"40" : [{"abbrev" : "WV", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "WV", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "WV", "zip" : "#", "city" : "#", "address" : "#"}]' +
    //'"41" : [{"abbrev" : "WY", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "WY", "zip" : "#", "city" : "#", "address" : "#"}, {"abbrev" : "WY", "zip" : "#", "city" : "#", "address" : "#"}]' +

'}'
