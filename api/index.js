var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/brent/Developer/f1-champs/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());

// app/styles/normalize.css
var normalize_default = "/build/_assets/normalize-LI3PGF7F.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-5WFOB2IY.css";

// app/styles/fonts.css
var fonts_default = "/build/_assets/fonts-OZIIJW7P.css";

// app/styles/styles.css
var styles_default = "/build/_assets/styles-JLJKBA7X.css";

// route:/Users/brent/Developer/f1-champs/app/root.tsx
var meta = () => {
  return { title: "F1 Champs" };
};
var links = () => {
  return [
    { rel: "stylesheet", href: normalize_default },
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: fonts_default },
    { rel: "stylesheet", href: styles_default }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:/Users/brent/Developer/f1-champs/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
var import_remix3 = __toESM(require_remix());
function Index() {
  return /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/game"
  }, "To the game"));
}

// route:/Users/brent/Developer/f1-champs/app/routes/game.tsx
var game_exports = {};
__export(game_exports, {
  action: () => action,
  default: () => Game,
  loader: () => loader
});
init_react();
var import_remix4 = __toESM(require_remix());
var import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/lib/data.ts
init_react();

// app/data/drivers.json
var drivers_default = [
  "Carlo Abate",
  "George Abecassis",
  "Kenny Acheson",
  "Andrea de Adamich",
  "Philippe Adams",
  "Walt Ader",
  "Kurt Adolff",
  "Fred Agabashian",
  "Kurt Ahrens Jr.",
  "Jack Aitken",
  "Christijan Albers",
  "Alexander Albon",
  "Michele Alboreto",
  "Jean Alesi",
  "Jaime Alguersuari",
  "Philippe Alliot",
  "Cliff Allison",
  "Fernando Alonso",
  "Giovanna Amati",
  "George Amick",
  "Red Amick",
  "Chris Amon",
  "Bob Anderson",
  "Conny Andersson",
  "Emil Andres",
  "Mario Andretti",
  "Michael Andretti",
  "Keith Andrews",
  "Elio de Angelis",
  "Marco Apicella",
  "M\xE1rio de Ara\xFAjo Cabral",
  "Frank Armi",
  "Chuck Arnold",
  "Ren\xE9 Arnoux",
  "Peter Arundell",
  "Alberto Ascari",
  "Peter Ashdown",
  "Ian Ashley",
  "Gerry Ashmore",
  "Bill Aston",
  "Richard Attwood",
  "Manny Ayulo",
  "Luca Badoer",
  "Giancarlo Baghetti",
  "Julian Bailey",
  "Mauro Baldi",
  "Bobby Ball",
  "Marcel Balsa",
  "Lorenzo Bandini",
  "Henry Banks",
  "Fabrizio Barbazza",
  "John Barber",
  "Skip Barber",
  "Paolo Barilla",
  "Rubens Barrichello",
  "Michael Bartels",
  "Edgar Barth",
  "Giorgio Bassi",
  "Erwin Bauer",
  "Zsolt Baumgartner",
  "\xC9lie Bayol",
  "Don Beauman",
  "Karl-G\xFCnther Bechem",
  "Jean Behra",
  "Derek Bell",
  "Stefan Bellof",
  "Paul Belmondo",
  "Tom Bels\xF8",
  "Jean-Pierre Beltoise",
  "Olivier Beretta",
  "Allen Berg",
  "Georges Berger",
  "Gerhard Berger",
  "\xC9ric Bernard",
  "Enrique Bernoldi",
  "Enrico Bertaggia",
  "Tony Bettenhausen",
  "Mike Beuttler",
  "Birabongse Bhanudej",
  "Jules Bianchi",
  "Lucien Bianchi",
  "Gino Bianco",
  "Hans Binder",
  "Clemente Biondetti",
  "Pablo Birger",
  "Art Bisch",
  "Harry Blanchard",
  "Michael Bleekemolen",
  "Alex Blignaut",
  "Trevor Blokdyk",
  "Mark Blundell",
  "Raul Boesel",
  "Menato Boffa",
  "Bob Bondurant",
  "Felice Bonetto",
  "Jo Bonnier",
  "Roberto Bonomi",
  "Juan Manuel Bordeu",
  "Slim Borgudd",
  "Luki Botha",
  "Valtteri Bottas",
  "Jean-Christophe Boullion",
  "S\xE9bastien Bourdais",
  "Thierry Boutsen",
  "Johnny Boyd",
  "David Brabham",
  "Gary Brabham",
  "Jack Brabham",
  "Bill Brack",
  "Ernesto Brambilla",
  "Vittorio Brambilla",
  "Toni Branca",
  "Gianfranco Brancatelli",
  "Eric Brandon",
  "Don Branson",
  "Tom Bridger",
  "Tony Brise",
  "Chris Bristow",
  "Peter Broeker",
  "Tony Brooks",
  "Alan Brown",
  "Walt Brown",
  "Warwick Brown",
  "Adolf Brudes",
  "Martin Brundle",
  "Gianmaria Bruni",
  "Jimmy Bryan",
  "Clemar Bucci",
  "Ronnie Bucknum",
  "Ivor Bueb",
  "S\xE9bastien Buemi",
  "Luiz Bueno",
  "Ian Burgess",
  "Luciano Burti",
  "Roberto Bussinello",
  "Jenson Button",
  "Tommy Byrne",
  "Giulio Cabianca",
  "Phil Cade",
  "Alex Caffi",
  "John Campbell-Jones",
  "Adri\xE1n Campos",
  "John Cannon",
  "Eitel Cantoni",
  "Bill Cantrell",
  "Ivan Capelli",
  "Piero Carini",
  "Duane Carter",
  "Eugenio Castellotti",
  "Johnny Cecotto",
  "Andrea de Cesaris",
  "Fran\xE7ois Cevert",
  "Eug\xE8ne Chaboud",
  "Jay Chamberlain",
  "Karun Chandhok",
  "Alain de Changy",
  "Colin Chapman",
  "Dave Charlton",
  "Pedro Chaves",
  "Bill Cheesbourg",
  "Eddie Cheever",
  "Andrea Chiesa",
  "Max Chilton",
  "Ettore Chimeri",
  "Louis Chiron",
  "Joie Chitwood",
  "Bob Christie",
  "Johnny Claes",
  "David Clapham",
  "Jim Clark",
  "Kevin Cogan",
  "Peter Collins",
  "Bernard Collomb",
  "Alberto Colombo",
  "\xC9rik Comas",
  "Franco Comotti",
  "George Connor",
  "George Constantine",
  "John Cordts",
  "David Coulthard",
  "Piers Courage",
  "Chris Craft",
  "Jim Crawford",
  "Ray Crawford",
  "Alberto Crespo",
  "Antonio Creus",
  "Larry Crockett",
  "Tony Crook",
  "Art Cross",
  "Geoffrey Crossley",
  "J\xE9r\xF4me d'Ambrosio",
  "Chuck Daigh",
  "Yannick Dalmas",
  "Derek Daly",
  "Christian Danner",
  "Jorge Daponte",
  "Anthony Davidson",
  "Jimmy Davies",
  "Colin Davis",
  "Jimmy Daywalt",
  "Jean-Denis D\xE9l\xE9traz",
  "Patrick Depailler",
  "Pedro Diniz",
  "Duke Dinsmore",
  "Frank Dochnal",
  "Jos\xE9 Dolhem",
  "Martin Donnelly",
  "Mark Donohue",
  "Robert Doornbos",
  "Ken Downing",
  "Bob Drake",
  "Paddy Driver",
  "Piero Drogo",
  "Bernard de Dryver",
  "Johnny Dumfries",
  "Geoff Duke",
  "Len Duncan",
  "Piero Dusio",
  "George Eaton",
  "Bernie Ecclestone",
  "Don Edmunds",
  "Guy Edwards",
  "Vic Elford",
  "Ed Elisian",
  "Paul Emery",
  "Tom\xE1\u0161 Enge",
  "Paul England",
  "Marcus Ericsson",
  "Harald Ertl",
  "Nasif Est\xE9fano",
  "Philippe \xC9tancelin",
  "Bob Evans",
  "Corrado Fabi",
  "Teo Fabi",
  "Pascal Fabre",
  "Carlo Facetti",
  "Luigi Fagioli",
  "Jack Fairman",
  "Juan Manuel Fangio",
  "Nino Farina",
  "Walt Faulkner",
  "William Ferguson",
  "Maria Teresa de Filippis",
  "Ralph Firman",
  "Ludwig Fischer",
  "Rudi Fischer",
  "Mike Fisher",
  "Giancarlo Fisichella",
  "John Fitch",
  "Christian Fittipaldi",
  "Emerson Fittipaldi",
  "Pietro Fittipaldi",
  "Wilson Fittipaldi",
  "Theo Fitzau",
  "Pat Flaherty",
  "Jan Flinterman",
  "Ron Flockhart",
  "Myron Fohr",
  "Gregor Foitek",
  "George Follmer",
  "George Fonder",
  "Norberto Fontana",
  "Asdr\xFAbal Fontes Bayardo",
  "Carl Forberg",
  "Gene Force",
  "Franco Forini",
  "Philip Fotheringham-Parker",
  "A. J. Foyt",
  "Giorgio Francia",
  "Don Freeland",
  "Heinz-Harald Frentzen",
  "Paul Fr\xE8re",
  "Patrick Friesacher",
  "Joe Fry",
  "Hiroshi Fushida",
  "Beppe Gabbiani",
  "Bertrand Gachot",
  "Patrick Gaillard",
  "Divina Galica",
  "Nanni Galli",
  "Oscar Alfredo G\xE1lvez",
  "Fred Gamble",
  "Howden Ganley",
  "Giedo van der Garde",
  "Frank Gardner",
  "Billy Garrett",
  "Jo Gartner",
  "Pierre Gasly",
  "Tony Gaze",
  "Geki",
  "Olivier Gendebien",
  "Marc Gen\xE9",
  "Elmer George",
  "Bob Gerard",
  "Gerino Gerini",
  "Peter Gethin",
  "Piercarlo Ghinzani",
  "Bruno Giacomelli",
  "Dick Gibson",
  "Gimax",
  "Richie Ginther",
  "Antonio Giovinazzi",
  "Yves Giraud-Cabantous",
  "Ignazio Giunti",
  "Timo Glock",
  "Helm Gl\xF6ckler",
  "Paco Godia",
  "Carel Godin de Beaufort",
  "Christian Goethals",
  "Paul Goldsmith",
  "Jos\xE9 Froil\xE1n Gonz\xE1lez",
  "\xD3scar Gonz\xE1lez",
  "Aldo Gordini",
  "Horace Gould",
  "Jean-Marc Gounon",
  "Emmanuel de Graffenried",
  "Lucas di Grassi",
  "Cecil Green",
  "Keith Greene",
  "Masten Gregory",
  "Cliff Griffith",
  "Georges Grignard",
  "Bobby Grim",
  "Romain Grosjean",
  "Olivier Grouillard",
  "Brian Gubby",
  "Andr\xE9 Guelfi",
  "Miguel \xC1ngel Guerra",
  "Roberto Guerrero",
  "Maur\xEDcio Gugelmin",
  "Dan Gurney",
  "Esteban Guti\xE9rrez",
  "Hubert Hahne",
  "Mike Hailwood",
  "Mika H\xE4kkinen",
  "Bruce Halford",
  "Jim Hall",
  "Duncan Hamilton",
  "Lewis Hamilton",
  "David Hampshire",
  "Sam Hanks",
  "Walt Hansgen",
  "Mike Harris",
  "Cuth Harrison",
  "Brian Hart",
  "Brendon Hartley",
  "Gene Hartley",
  "Rio Haryanto",
  "Masahiro Hasemi",
  "Naoki Hattori",
  "Paul Hawkins",
  "Mike Hawthorn",
  "Boy Hayje",
  "Willi Heeks",
  "Nick Heidfeld",
  "Theo Helfrich",
  "Mack Hellings",
  "Brian Henton",
  "Johnny Herbert",
  "Al Herman",
  "Hans Herrmann",
  "Fran\xE7ois Hesnault",
  "Hans Heyer",
  "Damon Hill",
  "Graham Hill",
  "Phil Hill",
  "Peter Hirt",
  "David Hobbs",
  "Gary Hocking",
  "Ingo Hoffmann",
  "Bill Holland",
  "Jackie Holmes",
  "Bill Homeier",
  "Kazuyoshi Hoshino",
  "Jerry Hoyt",
  "Nico H\xFClkenberg",
  "Denny Hulme",
  "James Hunt",
  "Jim Hurtubise",
  "Gus Hutchison",
  "Jacky Ickx",
  "Yuji Ide",
  "Jes\xFAs Iglesias",
  "Taki Inoue",
  "Innes Ireland",
  "Eddie Irvine",
  "Chris Irwin",
  "Jean-Pierre Jabouille",
  "Jimmy Jackson",
  "Joe James",
  "John James",
  "Jean-Pierre Jarier",
  "Max Jean",
  "Stefan Johansson",
  "Eddie Johnson",
  "Leslie Johnson",
  "Bruce Johnstone",
  "Alan Jones",
  "Tom Jones",
  "Juan Jover",
  "Oswald Karch",
  "Narain Karthikeyan",
  "Ukyo Katayama",
  "Ken Kavanagh",
  "Rupert Keegan",
  "Eddie Keizan",
  "Al Keller",
  "Joe Kelly",
  "David Kennedy",
  "Loris Kessel",
  "Bruce Kessler",
  "Nicolas Kiesa",
  "Leo Kinnunen",
  "Danny Kladis",
  "Hans Klenk",
  "Peter de Klerk",
  "Christian Klien",
  "Karl Kling",
  "Ernst Klodwig",
  "Kamui Kobayashi",
  "Helmuth Koinigg",
  "Heikki Kovalainen",
  "Mikko Kozarowitzky",
  "Willi Krakau",
  "Rudolf Krause",
  "Robert Kubica",
  "Kurt Kuhnke",
  "Masami Kuwashima",
  "Daniil Kvyat",
  "Robert La Caze",
  "Jacques Laffite",
  "Franck Lagorce",
  "Jan Lammers",
  "Pedro Lamy",
  "Chico Landi",
  "Hermann Lang",
  "Claudio Langes",
  "Nicola Larini",
  "Oscar Larrauri",
  "G\xE9rard Larrousse",
  "Jud Larson",
  "Nicholas Latifi",
  "Niki Lauda",
  "Roger Laurent",
  "Giovanni Lavaggi",
  "Chris Lawrence",
  "Charles Leclerc",
  "Michel Lecl\xE8re",
  "Neville Lederle",
  "Geoff Lees",
  "Gijs van Lennep",
  "Arthur Legat",
  "JJ Lehto",
  "Lamberto Leoni",
  "Les Leston",
  "Pierre Levegh",
  "Bayliss Levrett",
  "Jackie Lewis",
  "Stuart Lewis-Evans",
  "Guy Ligier",
  "Andy Linden",
  "Roberto Lippi",
  "Vitantonio Liuzzi",
  "Dries van der Lof",
  "Lella Lombardi",
  "Ricardo Londo\xF1o",
  "Ernst Loof",
  "Andr\xE9 Lotterer",
  "Henri Louveau",
  "John Love",
  "Pete Lovely",
  "Roger Loyer",
  "Jean Lucas",
  "Jean Lucienbonnet",
  "Erik Lundgren",
  "Brett Lunger",
  "Mike MacDowel",
  "Herbert MacKay-Fraser",
  "Bill Mackey",
  "Lance Macklin",
  "Damien Magee",
  "Tony Maggs",
  "Mike Magill",
  "Umberto Maglioli",
  "Jan Magnussen",
  "Kevin Magnussen",
  "Guy Mairesse",
  "Willy Mairesse",
  "Pastor Maldonado",
  "Nigel Mansell",
  "Sergio Mantovani",
  "Johnny Mantz",
  "Robert Manzon",
  "Onofre Marim\xF3n",
  "Helmut Marko",
  "Tarso Marques",
  "Leslie Marr",
  "Tony Marsh",
  "Eug\xE8ne Martin",
  "Pierluigi Martini",
  "Jochen Mass",
  "Felipe Massa",
  "Cristiano da Matta",
  "Michael May",
  "Timmy Mayer",
  "Nikita Mazepin",
  "Fran\xE7ois Mazet",
  "Gast\xF3n Mazzacane",
  "Kenneth McAlpine",
  "Perry McCarthy",
  "Ernie McCoy",
  "Johnny McDowell",
  "Jack McGrath",
  "Brian McGuire",
  "Bruce McLaren",
  "Allan McNish",
  "Graham McRae",
  "Jim McWithey",
  "Carlos Menditeguy",
  "Roberto Merhi",
  "Harry Merkel",
  "Arturo Merzario",
  "Roberto Mieres",
  "Fran\xE7ois Migault",
  "John Miles",
  "Ken Miles",
  "Andr\xE9 Milhoux",
  "Chet Miller",
  "Gerhard Mitter",
  "Stefano Modena",
  "Thomas Monarch",
  "Franck Montagny",
  "Tiago Monteiro",
  "Andrea Montermini",
  "Peter Monteverdi",
  "Robin Montgomerie-Charrington",
  "Juan Pablo Montoya",
  "Gianni Morbidelli",
  "Roberto Moreno",
  "Dave Morgan",
  "Silvio Moser",
  "Bill Moss",
  "Stirling Moss",
  "Gino Munaron",
  "David Murray",
  "Luigi Musso",
  "Kazuki Nakajima",
  "Satoru Nakajima",
  "Shinji Nakano",
  "Duke Nalon",
  "Alessandro Nannini",
  "Emanuele Naspetti",
  "Felipe Nasr",
  "Massimo Natili",
  "Brian Naylor",
  "Mike Nazaruk",
  "Tiff Needell",
  "Jac Nellemann",
  "Patrick N\xE8ve",
  "John Nicholson",
  "Cal Niday",
  "Helmut Niedermayr",
  "Brausch Niemann",
  "Gunnar Nilsson",
  "Hideki Noda",
  "Lando Norris",
  "Rodney Nuckey",
  "Robert O'Brien",
  "Esteban Ocon",
  "Pat O'Connor",
  "Casimiro de Oliveira",
  "Jackie Oliver",
  "Danny Ongais",
  "Rikky von Opel",
  "Karl Oppitzhauser",
  "Fritz d'Orey",
  "Arthur Owen",
  "Carlos Pace",
  "Nello Pagani",
  "Riccardo Paletti",
  "Torsten Palm",
  "Jolyon Palmer",
  "Jonathan Palmer",
  "Olivier Panis",
  "Giorgio Pantano",
  "Massimiliano Papis",
  "Mike Parkes",
  "Reg Parnell",
  "Tim Parnell",
  "Johnnie Parsons",
  "Riccardo Patrese",
  "Al Pease",
  "Roger Penske",
  "Cesare Perdisa",
  "Sergio P\xE9rez",
  "Luis P\xE9rez-Sala",
  "Larry Perkins",
  "Henri Pescarolo",
  "Alessandro Pesenti-Rossi",
  "Josef Peters",
  "Ronnie Peterson",
  "Vitaly Petrov",
  "Alfredo Pi\xE1n",
  "Charles Pic",
  "Fran\xE7ois Picard",
  "Ernie Pieterse",
  "Paul Pietsch",
  "Andr\xE9 Pilette",
  "Teddy Pilette",
  "Luigi Piotti",
  "David Piper",
  "Nelson Piquet",
  "Nelson Piquet Jr.",
  "Renato Pirocchi",
  "Didier Pironi",
  "Emanuele Pirro",
  "Ant\xF4nio Pizzonia",
  "Eric van de Poele",
  "Jacques Pollet",
  "Ben Pon",
  "Dennis Poore",
  "Alfonso de Portago",
  "Sam Posey",
  "Charles Pozzi",
  "Jackie Pretorius",
  "Ernesto Prinoth",
  "David Prophet",
  "Alain Prost",
  "Tom Pryce",
  "David Purley",
  "Clive Puzey",
  "Dieter Quester",
  "Ian Raby",
  "Bobby Rahal",
  "Kimi R\xE4ikk\xF6nen",
  "Hermano da Silva Ramos",
  "Pierre-Henri Raphanel",
  "Dick Rathmann",
  "Jim Rathmann",
  "Roland Ratzenberger",
  "H\xE9ctor Rebaque",
  "Brian Redman",
  "Jimmy Reece",
  "Ray Reed",
  "Alan Rees",
  "Clay Regazzoni",
  "Paul di Resta",
  "Carlos Reutemann",
  "Lance Reventlow",
  "Peter Revson",
  "John Rhodes",
  "Alex Ribeiro",
  "Daniel Ricciardo",
  "Ken Richardson",
  "Fritz Riess",
  "Jim Rigsby",
  "Jochen Rindt",
  "John Riseley-Prichard",
  "Giovanni de Riu",
  "Richard Robarts",
  "Pedro Rodr\xEDguez",
  "Ricardo Rodr\xEDguez",
  "Alberto Rodriguez Larreta",
  "Franco Rol",
  "Alan Rollinson",
  "Tony Rolt",
  "Bertil Roos",
  "Pedro de la Rosa",
  "Keke Rosberg",
  "Nico Rosberg",
  "Mauri Rose",
  "Louis Rosier",
  "Ricardo Rosset",
  "Alexander Rossi",
  "Huub Rothengatter",
  "Basil van Rooyen",
  "Lloyd Ruby",
  "Jean-Claude Rudaz",
  "George Russell",
  "Eddie Russo",
  "Paul Russo",
  "Troy Ruttman",
  "Peter Ryan",
  "Eddie Sachs",
  "Bob Said",
  "Carlos Sainz Jr.",
  "Eliseo Salazar",
  "Mika Salo",
  "Roy Salvadori",
  "Consalvo Sanesi",
  "St\xE9phane Sarrazin",
  "Takuma Sato",
  "Carl Scarborough",
  "Ludovico Scarfiotti",
  "Giorgio Scarlatti",
  "Ian Scheckter",
  "Jody Scheckter",
  "Harry Schell",
  "Tim Schenken",
  "Albert Scherrer",
  "Domenico Schiattarella",
  "Heinz Schiller",
  "Bill Schindler",
  "Jean-Louis Schlesser",
  "Jo Schlesser",
  "Bernd Schneider",
  "Rudolf Schoeller",
  "Rob Schroeder",
  "Michael Schumacher",
  "Mick Schumacher",
  "Ralf Schumacher",
  "Vern Schuppan",
  "Adolfo Schwelm Cruz",
  "Bob Scott",
  "Archie Scott Brown",
  "Piero Scotti",
  "Wolfgang Seidel",
  "G\xFCnther Seiffert",
  "Ayrton Senna",
  "Bruno Senna",
  "Dorino Serafini",
  "Chico Serra",
  "Doug Serrurier",
  "Johnny Servoz-Gavin",
  "Tony Settember",
  "Hap Sharp",
  "Brian Shawe-Taylor",
  "Carroll Shelby",
  "Tony Shelly",
  "Jo Siffert",
  "Andr\xE9 Simon",
  "Sergey Sirotkin",
  "Rob Slotemaker",
  "Mois\xE9s Solana",
  "Alex Soler-Roig",
  "Raymond Sommer",
  "Vincenzo Sospiri",
  "Stephen South",
  "Mike Sparken",
  "Scott Speed",
  "Mike Spence",
  "Alan Stacey",
  "Gaetano Starrabba",
  "Will Stevens",
  "Chuck Stevenson",
  "Ian Stewart",
  "Jackie Stewart",
  "Jimmy Stewart",
  "Siegfried Stohr",
  "Rolf Stommelen",
  "Philippe Streiff",
  "Lance Stroll",
  "Hans Stuck",
  "Hans-Joachim Stuck",
  "Otto Stuppacher",
  "Danny Sullivan",
  "Marc Surer",
  "John Surtees",
  "Andy Sutcliffe",
  "Adrian Sutil",
  "Len Sutton",
  "Aguri Suzuki",
  "Toshio Suzuki",
  "Jacques Swaters",
  "Bob Sweikert",
  "Toranosuke Takagi",
  "Noritake Takahara",
  "Kunimitsu Takahashi",
  "Patrick Tambay",
  "Luigi Taramazzo",
  "Gabriele Tarquini",
  "Piero Taruffi",
  "Dennis Taylor",
  "Henry Taylor",
  "John Taylor",
  "Mike Taylor",
  "Trevor Taylor",
  "Marshall Teague",
  "Shorty Templeman",
  "Max de Terra",
  "Andr\xE9 Testut",
  "Mike Thackwell",
  "Alfonso Thiele",
  "Eric Thompson",
  "Johnny Thomson",
  "Leslie Thorne",
  "Bud Tingelstad",
  "Sam Tingle",
  "Desmond Titterington",
  "Johnnie Tolan",
  "Alejandro de Tomaso",
  "Charles de Tornaco",
  "Tony Trimmer",
  "Maurice Trintignant",
  "Wolfgang von Trips",
  "Jarno Trulli",
  "Yuki Tsunoda",
  "Esteban Tuero",
  "Guy Tunmer",
  "Jack Turner",
  "Toni Ulmen",
  "Bobby Unser",
  "Jerry Unser Jr.",
  "Alberto Uria",
  "Nino Vaccarella",
  "Stoffel Vandoorne",
  "Bob Veith",
  "Jean-\xC9ric Vergne",
  "Jos Verstappen",
  "Max Verstappen",
  "Sebastian Vettel",
  "Gilles Villeneuve",
  "Jacques Villeneuve",
  "Jacques Villeneuve Sr.",
  "Luigi Villoresi",
  "Emilio de Villota",
  "Ottorino Volonterio",
  "Jo Vonlanthen",
  "Ernie de Vos",
  "Bill Vukovich",
  "Syd van der Vyver",
  "Fred Wacker",
  "David Walker",
  "Peter Walker",
  "Lee Wallard",
  "Heini Walter",
  "Rodger Ward",
  "Derek Warwick",
  "John Watson",
  "Spider Webb",
  "Mark Webber",
  "Pascal Wehrlein",
  "Volker Weidler",
  "Wayne Weiler",
  "Karl Wendlinger",
  "Peter Westbury",
  "Chuck Weyant",
  "Ken Wharton",
  "Ted Whiteaway",
  "Graham Whitehead",
  "Peter Whitehead",
  "Bill Whitehouse",
  "Robin Widdows",
  "Eppie Wietzes",
  "Mike Wilds",
  "Jonathan Williams",
  "Roger Williamson",
  "Dempsey Wilson",
  "Desir\xE9 Wilson",
  "Justin Wilson",
  "Vic Wilson",
  "Joachim Winkelhock",
  "Manfred Winkelhock",
  "Markus Winkelhock",
  "Reine Wisell",
  "Roelof Wunderink",
  "Alexander Wurz",
  "Sakon Yamamoto",
  "Alex Yoong",
  "Alessandro Zanardi",
  "Emilio Zapico",
  "Guanyu Zhou",
  "Ricardo Zonta",
  "Renzo Zorzi",
  "Ricardo Zunino"
];

// app/data/champions.json
var _950 = {
  name: "Giuseppe Farina"
};
var _951 = {
  name: "Manuel Fangio"
};
var _952 = {
  name: "Alberto Ascari"
};
var _953 = {
  name: "Alberto Ascari"
};
var _954 = {
  name: "Manuel Fangio"
};
var _955 = {
  name: "Manuel Fangio"
};
var _956 = {
  name: "Manuel Fangio"
};
var _957 = {
  name: "Manuel Fangio"
};
var _958 = {
  name: "Mike Hawthorn"
};
var _959 = {
  name: "Jack Brabham"
};
var _960 = {
  name: "Jack Brabham"
};
var _961 = {
  name: "Phil Hill"
};
var _962 = {
  name: "Graham Hill"
};
var _963 = {
  name: "Jim Clark"
};
var _964 = {
  name: "John Surtees"
};
var _965 = {
  name: "Jim Clark"
};
var _966 = {
  name: "Jack Brabham"
};
var _967 = {
  name: "Denny Hulme"
};
var _968 = {
  name: "Graham Hill"
};
var _969 = {
  name: "Jackie Stewart"
};
var _970 = {
  name: "Jochen Rindt"
};
var _971 = {
  name: "Jackie Stewart"
};
var _972 = {
  name: "Emerson Fittipaldi"
};
var _973 = {
  name: "Jackie Stewart"
};
var _974 = {
  name: "Emerson Fittipaldi"
};
var _975 = {
  name: "Niki Lauda"
};
var _976 = {
  name: "James Hunt"
};
var _977 = {
  name: "Niki Lauda"
};
var _978 = {
  name: "Mario Andretti"
};
var _979 = {
  name: "Jody Scheckter"
};
var _980 = {
  name: "Alan Jones"
};
var _981 = {
  name: "Nelson Piquet"
};
var _982 = {
  name: "Keke Rosberg"
};
var _983 = {
  name: "Nelson Piquet"
};
var _984 = {
  name: "Niki Lauda"
};
var _985 = {
  name: "Alain Prost"
};
var _986 = {
  name: "Alain Prost"
};
var _987 = {
  name: "Nelson Piquet"
};
var _988 = {
  name: "Ayrton Senna"
};
var _989 = {
  name: "Alain Prost"
};
var _990 = {
  name: "Ayrton Senna"
};
var _991 = {
  name: "Ayrton Senna"
};
var _992 = {
  name: "Nigel Mansell"
};
var _993 = {
  name: "Alain Prost"
};
var _994 = {
  name: "Michael Schumacher"
};
var _995 = {
  name: "Michael Schumacher"
};
var _996 = {
  name: "Damon Hill"
};
var _997 = {
  name: "Jacques Villeneuve"
};
var _998 = {
  name: "Mika H\xE4kkinen"
};
var _999 = {
  name: "Mika H\xE4kkinen"
};
var _000 = {
  name: "Michael Schumacher"
};
var _001 = {
  name: "Michael Schumacher"
};
var _002 = {
  name: "Michael Schumacher"
};
var _003 = {
  name: "Michael Schumacher"
};
var _004 = {
  name: "Michael Schumacher"
};
var _005 = {
  name: "Fernando Alonso"
};
var _006 = {
  name: "Fernando Alonso"
};
var _007 = {
  name: "Kimi R\xE4ikk\xF6nen"
};
var _008 = {
  name: "Lewis Hamilton"
};
var _009 = {
  name: "Jenson Button"
};
var _010 = {
  name: "Sebastian Vettel"
};
var _011 = {
  name: "Sebastian Vettel"
};
var _012 = {
  name: "Sebastian Vettel"
};
var _013 = {
  name: "Sebastian Vettel"
};
var _014 = {
  name: "Lewis Hamilton"
};
var _015 = {
  name: "Lewis Hamilton"
};
var _016 = {
  name: "Nico Rosberg"
};
var _017 = {
  name: "Lewis Hamilton"
};
var _018 = {
  name: "Lewis Hamilton"
};
var _019 = {
  name: "Lewis Hamilton"
};
var _020 = {
  name: "Lewis Hamilton"
};
var _021 = {
  name: "Max Verstappen"
};
var champions_default = {
  "1950": _950,
  "1951": _951,
  "1952": _952,
  "1953": _953,
  "1954": _954,
  "1955": _955,
  "1956": _956,
  "1957": _957,
  "1958": _958,
  "1959": _959,
  "1960": _960,
  "1961": _961,
  "1962": _962,
  "1963": _963,
  "1964": _964,
  "1965": _965,
  "1966": _966,
  "1967": _967,
  "1968": _968,
  "1969": _969,
  "1970": _970,
  "1971": _971,
  "1972": _972,
  "1973": _973,
  "1974": _974,
  "1975": _975,
  "1976": _976,
  "1977": _977,
  "1978": _978,
  "1979": _979,
  "1980": _980,
  "1981": _981,
  "1982": _982,
  "1983": _983,
  "1984": _984,
  "1985": _985,
  "1986": _986,
  "1987": _987,
  "1988": _988,
  "1989": _989,
  "1990": _990,
  "1991": _991,
  "1992": _992,
  "1993": _993,
  "1994": _994,
  "1995": _995,
  "1996": _996,
  "1997": _997,
  "1998": _998,
  "1999": _999,
  "2000": _000,
  "2001": _001,
  "2002": _002,
  "2003": _003,
  "2004": _004,
  "2005": _005,
  "2006": _006,
  "2007": _007,
  "2008": _008,
  "2009": _009,
  "2010": _010,
  "2011": _011,
  "2012": _012,
  "2013": _013,
  "2014": _014,
  "2015": _015,
  "2016": _016,
  "2017": _017,
  "2018": _018,
  "2019": _019,
  "2020": _020,
  "2021": _021
};

// app/lib/data.ts
async function getAllDrivers() {
  const drivers = drivers_default;
  return drivers;
}
async function getAllChampions() {
  const champions = champions_default;
  return champions;
}
async function getChampionsSince(year) {
  const drivers = await getAllChampions();
  return Object.fromEntries(Object.entries(drivers).filter(([key]) => {
    return parseInt(key) > year;
  }));
}
async function getChampionByYear(year) {
  const drivers = await getAllChampions();
  return drivers[year];
}

// route:/Users/brent/Developer/f1-champs/app/routes/game.tsx
var START_YEAR = 2021;
var NUMBER_OF_LIVES = 5;
var action = async ({ request }) => {
  const formData = await request.formData();
  const guess = formData.get("guess");
  const formCurrentYear = formData.get("currentYear");
  const formLives = formData.get("lives");
  (0, import_tiny_invariant.default)(typeof guess === "string", "guess should be a string");
  (0, import_tiny_invariant.default)(typeof formCurrentYear === "string", "currentYear should be a string");
  (0, import_tiny_invariant.default)(typeof formLives === "string", "lives should be a string");
  const currentYear = parseInt(formCurrentYear);
  const lives = parseInt(formLives);
  const correctDriver = await getChampionByYear(currentYear);
  const isCorrect = (correctDriver == null ? void 0 : correctDriver.name) === guess;
  const response = { guess, wasCorrect: isCorrect, currentYear, lives };
  if (isCorrect) {
    const newCurrentYear = currentYear - 1;
    const correctAnswers2 = await getChampionsSince(newCurrentYear);
    return (0, import_remix4.json)(__spreadProps(__spreadValues({}, response), {
      currentYear: newCurrentYear,
      correctAnswers: correctAnswers2
    }));
  }
  const correctAnswers = await getChampionsSince(currentYear);
  return (0, import_remix4.json)(__spreadProps(__spreadValues({}, response), {
    correctAnswers,
    lives: lives - 1
  }));
};
var loader = async () => {
  return (0, import_remix4.json)(await getAllDrivers());
};
function Game() {
  const driverOptions = (0, import_remix4.useLoaderData)();
  const formData = (0, import_remix4.useActionData)();
  const currentYear = (formData == null ? void 0 : formData.currentYear) ?? START_YEAR.toString();
  const correctAnswers = (formData == null ? void 0 : formData.correctAnswers) ?? {};
  const wasCorrect = formData == null ? void 0 : formData.wasCorrect;
  const lives = (formData == null ? void 0 : formData.lives) ?? NUMBER_OF_LIVES;
  const isGameOver = lives === 0;
  return /* @__PURE__ */ React.createElement("section", {
    className: "max-w-md text-center container mx-auto"
  }, isGameOver && /* @__PURE__ */ React.createElement("h2", null, "Game Over"), /* @__PURE__ */ React.createElement("p", null, "Lives left: ", new Array(lives).fill("\u2764\uFE0F").join(" ")), /* @__PURE__ */ React.createElement("p", null, (formData == null ? void 0 : formData.guess) ? `Your last guess: ${formData == null ? void 0 : formData.guess}` : `Go and guess something!`), wasCorrect !== void 0 && /* @__PURE__ */ React.createElement("p", null, wasCorrect ? "\u2705 Hooray! That was correct!" : "\u274C Nope, that's not it."), /* @__PURE__ */ React.createElement(import_remix4.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("p", null, currentYear), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "name"
  }, "Driver name:"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "guess",
    id: "guess",
    list: "guess-options",
    disabled: isGameOver,
    placeholder: "Enter a driver name",
    className: "placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
  }), /* @__PURE__ */ React.createElement("datalist", {
    id: "guess-options"
  }, driverOptions.map((driver) => /* @__PURE__ */ React.createElement("option", {
    key: driver,
    value: driver
  })))), /* @__PURE__ */ React.createElement("input", {
    type: "number",
    name: "currentYear",
    value: currentYear,
    readOnly: true,
    style: { display: "none" }
  }), /* @__PURE__ */ React.createElement("input", {
    type: "number",
    name: "lives",
    value: lives,
    readOnly: true,
    style: { display: "none" }
  }), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("button", {
    className: "bg-red-600 hover:bg-red-500 text-slate-100 px-20 py-2 rounded-full",
    type: "submit",
    disabled: isGameOver
  }, "Guess")), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/game"
  }, "Reset"))), Object.keys(correctAnswers).length !== 0 && /* @__PURE__ */ React.createElement(CorrectAnswers, {
    answers: correctAnswers
  }));
}
var CorrectAnswers = ({ answers }) => /* @__PURE__ */ React.createElement("ul", null, Object.entries(answers).map(([year, driver]) => /* @__PURE__ */ React.createElement("li", {
  key: year
}, /* @__PURE__ */ React.createElement("em", null, year), " ", driver.name)));

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "ba3090fb", "entry": { "module": "/build/entry.client-7PPCDYPV.js", "imports": ["/build/_shared/chunk-3BHWQSMB.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-7UCNNC5I.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/game": { "id": "routes/game", "parentId": "root", "path": "game", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/game-KEOUWWBM.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-7SSZABN6.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-BA3090FB.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/game": {
    id: "routes/game",
    parentId: "root",
    path: "game",
    index: void 0,
    caseSensitive: void 0,
    module: game_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9icmVudC9EZXZlbG9wZXIvZjEtY2hhbXBzL2FwcC9yb290LnRzeCIsICJyb3V0ZTovVXNlcnMvYnJlbnQvRGV2ZWxvcGVyL2YxLWNoYW1wcy9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvYnJlbnQvRGV2ZWxvcGVyL2YxLWNoYW1wcy9hcHAvcm91dGVzL2dhbWUudHN4IiwgIi4uL2FwcC9saWIvZGF0YS50cyIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjIuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9icmVudC9EZXZlbG9wZXIvZjEtY2hhbXBzL2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9icmVudC9EZXZlbG9wZXIvZjEtY2hhbXBzL2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvYnJlbnQvRGV2ZWxvcGVyL2YxLWNoYW1wcy9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvYnJlbnQvRGV2ZWxvcGVyL2YxLWNoYW1wcy9hcHAvcm91dGVzL2dhbWUudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9nYW1lXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9nYW1lXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImdhbWVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH1cbiAgfTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJ1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tICdyZW1peCdcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSAncmVtaXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0LFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+LFxuICApXG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldCgnQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpXG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZSgnPCFET0NUWVBFIGh0bWw+JyArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSlcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbn0gZnJvbSAncmVtaXgnXG5pbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuXG5pbXBvcnQgbm9ybWFsaXplIGZyb20gJ34vc3R5bGVzL25vcm1hbGl6ZS5jc3MnXG5pbXBvcnQgdGFpbHdpbmQgZnJvbSAnfi9zdHlsZXMvdGFpbHdpbmQuY3NzJ1xuaW1wb3J0IGZvbnRzIGZyb20gJ34vc3R5bGVzL2ZvbnRzLmNzcydcbmltcG9ydCBzdHlsZXMgZnJvbSAnfi9zdHlsZXMvc3R5bGVzLmNzcydcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6ICdGMSBDaGFtcHMnIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxpbmtzID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IG5vcm1hbGl6ZSB9LFxuICAgIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHRhaWx3aW5kIH0sXG4gICAgeyByZWw6ICdzdHlsZXNoZWV0JywgaHJlZjogZm9udHMgfSxcbiAgICB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfSxcbiAgXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICA8TGl2ZVJlbG9hZCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKVxufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8TGluayB0bz1cIi9nYW1lXCI+VG8gdGhlIGdhbWU8L0xpbms+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG4iLCAiaW1wb3J0IHtcbiAgRm9ybSxcbiAganNvbixcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIHVzZUFjdGlvbkRhdGEsXG4gIHVzZUxvYWRlckRhdGEsXG4gIExpbmssXG59IGZyb20gJ3JlbWl4J1xuaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gJ3JlbWl4J1xuaW1wb3J0IGludmFyaWFudCBmcm9tICd0aW55LWludmFyaWFudCdcbmltcG9ydCB7IGdldEFsbERyaXZlcnMsIGdldENoYW1waW9uQnlZZWFyLCBnZXRDaGFtcGlvbnNTaW5jZSB9IGZyb20gJ34vbGliL2RhdGEnXG5pbXBvcnQgdHlwZSB7IERyaXZlcnNMaXN0IH0gZnJvbSAnfi90eXBlcydcblxudHlwZSBHYW1lRGF0YSA9IHtcbiAgZ3Vlc3M6IHN0cmluZ1xuICB3YXNDb3JyZWN0OiBib29sZWFuXG4gIGN1cnJlbnRZZWFyOiBzdHJpbmdcbiAgY29ycmVjdEFuc3dlcnM6IERyaXZlcnNMaXN0XG4gIGxpdmVzOiBudW1iZXJcbn1cblxuY29uc3QgU1RBUlRfWUVBUiA9IDIwMjFcbmNvbnN0IE5VTUJFUl9PRl9MSVZFUyA9IDVcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKClcblxuICBjb25zdCBndWVzcyA9IGZvcm1EYXRhLmdldCgnZ3Vlc3MnKVxuICBjb25zdCBmb3JtQ3VycmVudFllYXIgPSBmb3JtRGF0YS5nZXQoJ2N1cnJlbnRZZWFyJylcbiAgY29uc3QgZm9ybUxpdmVzID0gZm9ybURhdGEuZ2V0KCdsaXZlcycpXG5cbiAgaW52YXJpYW50KHR5cGVvZiBndWVzcyA9PT0gJ3N0cmluZycsICdndWVzcyBzaG91bGQgYmUgYSBzdHJpbmcnKVxuICBpbnZhcmlhbnQoXG4gICAgdHlwZW9mIGZvcm1DdXJyZW50WWVhciA9PT0gJ3N0cmluZycsXG4gICAgJ2N1cnJlbnRZZWFyIHNob3VsZCBiZSBhIHN0cmluZycsXG4gIClcbiAgaW52YXJpYW50KHR5cGVvZiBmb3JtTGl2ZXMgPT09ICdzdHJpbmcnLCAnbGl2ZXMgc2hvdWxkIGJlIGEgc3RyaW5nJylcblxuICBjb25zdCBjdXJyZW50WWVhciA9IHBhcnNlSW50KGZvcm1DdXJyZW50WWVhcilcbiAgY29uc3QgbGl2ZXMgPSBwYXJzZUludChmb3JtTGl2ZXMpXG5cbiAgY29uc3QgY29ycmVjdERyaXZlciA9IGF3YWl0IGdldENoYW1waW9uQnlZZWFyKGN1cnJlbnRZZWFyKVxuICBjb25zdCBpc0NvcnJlY3QgPSBjb3JyZWN0RHJpdmVyPy5uYW1lID09PSBndWVzc1xuXG4gIGNvbnN0IHJlc3BvbnNlID0geyBndWVzcywgd2FzQ29ycmVjdDogaXNDb3JyZWN0LCBjdXJyZW50WWVhciwgbGl2ZXMgfVxuICBpZiAoaXNDb3JyZWN0KSB7XG4gICAgY29uc3QgbmV3Q3VycmVudFllYXIgPSBjdXJyZW50WWVhciAtIDFcbiAgICBjb25zdCBjb3JyZWN0QW5zd2VycyA9IGF3YWl0IGdldENoYW1waW9uc1NpbmNlKG5ld0N1cnJlbnRZZWFyKVxuICAgIHJldHVybiBqc29uKHtcbiAgICAgIC4uLnJlc3BvbnNlLFxuICAgICAgY3VycmVudFllYXI6IG5ld0N1cnJlbnRZZWFyLFxuICAgICAgY29ycmVjdEFuc3dlcnM6IGNvcnJlY3RBbnN3ZXJzLFxuICAgIH0pXG4gIH1cblxuICBjb25zdCBjb3JyZWN0QW5zd2VycyA9IGF3YWl0IGdldENoYW1waW9uc1NpbmNlKGN1cnJlbnRZZWFyKVxuICByZXR1cm4ganNvbih7XG4gICAgLi4ucmVzcG9uc2UsXG4gICAgY29ycmVjdEFuc3dlcnM6IGNvcnJlY3RBbnN3ZXJzLFxuICAgIGxpdmVzOiBsaXZlcyAtIDEsXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4ganNvbihhd2FpdCBnZXRBbGxEcml2ZXJzKCkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWUoKSB7XG4gIGNvbnN0IGRyaXZlck9wdGlvbnMgPSB1c2VMb2FkZXJEYXRhPHN0cmluZ1tdPigpXG5cbiAgY29uc3QgZm9ybURhdGEgPSB1c2VBY3Rpb25EYXRhPEdhbWVEYXRhPigpXG4gIGNvbnN0IGN1cnJlbnRZZWFyID0gZm9ybURhdGE/LmN1cnJlbnRZZWFyID8/IFNUQVJUX1lFQVIudG9TdHJpbmcoKVxuICBjb25zdCBjb3JyZWN0QW5zd2VycyA9IGZvcm1EYXRhPy5jb3JyZWN0QW5zd2VycyA/PyB7fVxuICBjb25zdCB3YXNDb3JyZWN0ID0gZm9ybURhdGE/Lndhc0NvcnJlY3RcbiAgY29uc3QgbGl2ZXMgPSBmb3JtRGF0YT8ubGl2ZXMgPz8gTlVNQkVSX09GX0xJVkVTXG5cbiAgY29uc3QgaXNHYW1lT3ZlciA9IGxpdmVzID09PSAwXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYXgtdy1tZCB0ZXh0LWNlbnRlciBjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAge2lzR2FtZU92ZXIgJiYgPGgyPkdhbWUgT3ZlcjwvaDI+fVxuICAgICAgPHA+TGl2ZXMgbGVmdDoge25ldyBBcnJheShsaXZlcykuZmlsbCgnXHUyNzY0XHVGRTBGJykuam9pbignICcpfTwvcD5cbiAgICAgIDxwPlxuICAgICAgICB7Zm9ybURhdGE/Lmd1ZXNzXG4gICAgICAgICAgPyBgWW91ciBsYXN0IGd1ZXNzOiAke2Zvcm1EYXRhPy5ndWVzc31gXG4gICAgICAgICAgOiBgR28gYW5kIGd1ZXNzIHNvbWV0aGluZyFgfVxuICAgICAgPC9wPlxuICAgICAge3dhc0NvcnJlY3QgIT09IHVuZGVmaW5lZCAmJiAoXG4gICAgICAgIDxwPlxuICAgICAgICAgIHt3YXNDb3JyZWN0XG4gICAgICAgICAgICA/ICdcdTI3MDUgSG9vcmF5ISBUaGF0IHdhcyBjb3JyZWN0ISdcbiAgICAgICAgICAgIDogXCJcdTI3NEMgTm9wZSwgdGhhdCdzIG5vdCBpdC5cIn1cbiAgICAgICAgPC9wPlxuICAgICAgKX1cbiAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgPHA+e2N1cnJlbnRZZWFyfTwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+RHJpdmVyIG5hbWU6PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJndWVzc1wiXG4gICAgICAgICAgICBpZD1cImd1ZXNzXCJcbiAgICAgICAgICAgIGxpc3Q9XCJndWVzcy1vcHRpb25zXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0dhbWVPdmVyfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBhIGRyaXZlciBuYW1lXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsYWNlaG9sZGVyOml0YWxpYyBwbGFjZWhvbGRlcjp0ZXh0LXNsYXRlLTQwMCBibG9jayBiZy13aGl0ZSB3LWZ1bGwgYm9yZGVyIGJvcmRlci1zbGF0ZS0zMDAgcm91bmRlZC1tZCBweS0yIHBsLTkgcHItMyBzaGFkb3ctc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1za3ktNTAwIGZvY3VzOnJpbmctc2t5LTUwMCBmb2N1czpyaW5nLTEgc206dGV4dC1zbVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGF0YWxpc3QgaWQ9XCJndWVzcy1vcHRpb25zXCI+XG4gICAgICAgICAgICB7ZHJpdmVyT3B0aW9ucy5tYXAoZHJpdmVyID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2RyaXZlcn0gdmFsdWU9e2RyaXZlcn0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGF0YWxpc3Q+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgbmFtZT1cImN1cnJlbnRZZWFyXCJcbiAgICAgICAgICB2YWx1ZT17Y3VycmVudFllYXJ9XG4gICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgbmFtZT1cImxpdmVzXCJcbiAgICAgICAgICB2YWx1ZT17bGl2ZXN9XG4gICAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTYwMCBob3ZlcjpiZy1yZWQtNTAwIHRleHQtc2xhdGUtMTAwIHB4LTIwIHB5LTIgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzR2FtZU92ZXJ9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgR3Vlc3NcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8TGluayB0bz1cIi9nYW1lXCI+UmVzZXQ8L0xpbms+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvRm9ybT5cbiAgICAgIHtPYmplY3Qua2V5cyhjb3JyZWN0QW5zd2VycykubGVuZ3RoICE9PSAwICYmIChcbiAgICAgICAgPENvcnJlY3RBbnN3ZXJzIGFuc3dlcnM9e2NvcnJlY3RBbnN3ZXJzfSAvPlxuICAgICAgKX1cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuY29uc3QgQ29ycmVjdEFuc3dlcnMgPSAoeyBhbnN3ZXJzIH06IHsgYW5zd2VyczogRHJpdmVyc0xpc3QgfSkgPT4gKFxuICA8dWw+XG4gICAge09iamVjdC5lbnRyaWVzKGFuc3dlcnMpLm1hcCgoW3llYXIsIGRyaXZlcl0pID0+IChcbiAgICAgIDxsaSBrZXk9e3llYXJ9PlxuICAgICAgICA8ZW0+e3llYXJ9PC9lbT4ge2RyaXZlci5uYW1lfVxuICAgICAgPC9saT5cbiAgICApKX1cbiAgPC91bD5cbilcbiIsICJpbXBvcnQgdHlwZSB7IERyaXZlciwgRHJpdmVyc0xpc3QgfSBmcm9tICd+L3R5cGVzJ1xuXG5pbXBvcnQgRFJJVkVSUyBmcm9tICd+L2RhdGEvZHJpdmVycy5qc29uJ1xuaW1wb3J0IENIQU1QSU9OUyBmcm9tICd+L2RhdGEvY2hhbXBpb25zLmpzb24nXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxEcml2ZXJzKCk6IFByb21pc2U8RHJpdmVyc0xpc3Q+IHtcbiAgY29uc3QgZHJpdmVycyA9IERSSVZFUlMgYXMgdW5rbm93biBhcyBEcml2ZXJzTGlzdFxuICByZXR1cm4gZHJpdmVyc1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsQ2hhbXBpb25zKCk6IFByb21pc2U8RHJpdmVyc0xpc3Q+IHtcbiAgY29uc3QgY2hhbXBpb25zID0gQ0hBTVBJT05TIGFzIHVua25vd24gYXMgRHJpdmVyc0xpc3RcbiAgcmV0dXJuIGNoYW1waW9uc1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2hhbXBpb25zU2luY2UoeWVhcjogbnVtYmVyKTogUHJvbWlzZTxEcml2ZXJzTGlzdD4ge1xuICBjb25zdCBkcml2ZXJzID0gYXdhaXQgZ2V0QWxsQ2hhbXBpb25zKClcblxuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgIE9iamVjdC5lbnRyaWVzKGRyaXZlcnMpLmZpbHRlcigoW2tleV0pID0+IHtcbiAgICAgIHJldHVybiBwYXJzZUludChrZXkpID4geWVhclxuICAgIH0pLFxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDaGFtcGlvbkJ5WWVhcihcbiAgeWVhcjogbnVtYmVyLFxuKTogUHJvbWlzZTxEcml2ZXIgfCB1bmRlZmluZWQ+IHtcbiAgY29uc3QgZHJpdmVycyA9IGF3YWl0IGdldEFsbENoYW1waW9ucygpXG4gIHJldHVybiBkcml2ZXJzW3llYXJdXG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonYmEzMDkwZmInLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LTdQUENEWVBWLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zQkhXUVNNQi5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtN1VDTk5DNUkuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9nYW1lJzp7J2lkJzoncm91dGVzL2dhbWUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZ2FtZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9nYW1lLUtFT1VXV0JNLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LTdTU1pBQk42LmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LUJBMzA5MEZCLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQUFBO0FBWUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxPQUFPLFFBQVE7QUFJbkIsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHNDQUFzQztBQUFBLE1BQ25FLFlBQVk7QUFB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RDtBQUFBLElBQWdCLFNBQVM7QUFBQTtBQUFBO0FBTWpDLElBQU0saUJBQWlCLENBQUMsRUFBRSxjQUN4QixvQ0FBQyxNQUFELE1BQ0csT0FBTyxRQUFRLFNBQVMsSUFBSSxDQUFDLENBQUMsTUFBTSxZQUNuQyxvQ0FBQyxNQUFEO0FBQUEsRUFBSSxLQUFLO0FBQUEsR0FDUCxvQ0FBQyxNQUFELE1BQUssT0FBVSxLQUFFLE9BQU87OztBRXZKaEM7QUFBQSxJQUFPLDBCQUFRLEVBQUMsV0FBVSxZQUFXLFNBQVEsRUFBQyxVQUFTLG1DQUFrQyxXQUFVLENBQUMsdUNBQXFDLFVBQVMsRUFBQyxRQUFPLEVBQUMsTUFBSyxRQUFPLFlBQVcsUUFBVSxRQUFPLElBQUcsU0FBUSxRQUFVLGlCQUFnQixRQUFVLFVBQVMsMkJBQTBCLFdBQVUsUUFBVSxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixTQUFPLGVBQWMsRUFBQyxNQUFLLGVBQWMsWUFBVyxRQUFPLFFBQU8sUUFBTyxTQUFRLFFBQVUsaUJBQWdCLFFBQVUsVUFBUyxrQ0FBaUMsV0FBVSxRQUFVLGFBQVksTUFBSyxhQUFZLE1BQUssb0JBQW1CLE9BQU0sb0JBQW1CLFNBQU8sZ0JBQWUsRUFBQyxNQUFLLGdCQUFlLFlBQVcsUUFBTyxRQUFPLFFBQVUsU0FBUSxNQUFLLGlCQUFnQixRQUFVLFVBQVMsbUNBQWtDLFdBQVUsUUFBVSxhQUFZLE9BQU0sYUFBWSxPQUFNLG9CQUFtQixPQUFNLG9CQUFtQixXQUFRLE9BQU07OztBTk1uNEIsSUFBTSxRQUFRLEVBQUUsUUFBUTtBQUN4QixJQUFNLFNBQVM7QUFBQSxFQUNwQixRQUFRO0FBQUEsSUFDTixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGdCQUFnQjtBQUFBLElBQ1osSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixlQUFlO0FBQUEsSUFDWCxJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
