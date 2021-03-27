(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{380:function(e,t,s){"use strict";s.r(t);var a=s(43),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"core"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#core"}},[e._v("#")]),e._v(" Core")]),e._v(" "),s("p",[e._v("Core is the module providing main Tiny Carousel functionalities and API. It exports the TinyCarousel class.")]),e._v(" "),s("h2",{attrs:{id:"styling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#styling"}},[e._v("#")]),e._v(" Styling")]),e._v(" "),s("p",[e._v("Styling can be imported via:")]),e._v(" "),s("blockquote",[s("p",[e._v("Sass: "),s("code",[e._v("@frsource/tiny-carousel-core/src/index.scss")])]),e._v(" "),s("p",[e._v("CSS: "),s("code",[e._v("@frsource/tiny-carousel-core/dist/index.css")])])]),e._v(" "),s("p",[e._v("When importing Sass source file you can configure "),s("a",{attrs:{href:"sass-lang.com/documentation/variables"}},[e._v("the variables")]),e._v(":")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Sass variables:")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v('{string} $class-name = "frs-tc"')])]),e._v(" "),s("li",[s("code",[e._v('{string} $item-class-name = "frs-tc-item"')])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Details:")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("$class-name")]),e._v(" is a class name added to the carousel element")]),e._v(" "),s("li",[s("code",[e._v("$item-class-name")]),e._v(" is a class name added to the carousel items (slides)")])])])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("This packages uses "),s("a",{attrs:{href:"https://www.npmjs.com/package/@frsource/frs-hide-scrollbar",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("@frsource/frs-hide-scrollbar")]),s("OutboundLink")],1),e._v(" to hide native scrollbars. So, when importing the core Sass styling you have a possibility to set "),s("a",{attrs:{href:"https://www.frsource.org/FRS-hide-scrollbar/usage",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("@frsource/frs-hide-scrollbar")]),e._v(" configuration"),s("OutboundLink")],1),e._v(" beforehand.\nFor example, this might be useful to change the default "),s("code",[e._v("frs-hide-scroll")]),e._v(" class name:")]),e._v(" "),s("div",{staticClass:"language-scss extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$frs-hide-scroll-classname")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"your-new-hide-scroll-classname"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("@import")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'~@frsource/tiny-carousel-core'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])]),e._v(" "),s("h2",{attrs:{id:"global-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-api"}},[e._v("#")]),e._v(" Global API")]),e._v(" "),s("h3",{attrs:{id:"updatedefaultconfig-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updatedefaultconfig-config"}},[e._v("#")]),e._v(" updateDefaultConfig( config )")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Arguments:")])]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#config"}},[s("code",[e._v("{Config} config")])])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns:")]),e._v(" "),s("code",[e._v("undefined")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Usage:")])]),e._v(" "),s("p",[e._v("Method used for changing the default configuration of the whole TinyCarousel module. Every instance created afterwards will use updated default configuration. The argument "),s("code",[e._v("config")]),e._v(" is merged with previous configuration which means that to remove property you’d need to pass it explicitly set to "),s("code",[e._v("undefined")]),e._v(".")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("See also:")]),e._v(" "),s("a",{attrs:{href:"#config"}},[s("code",[e._v("Config")]),e._v(" data type description")])])])]),e._v(" "),s("h3",{attrs:{id:"defaultconfig"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defaultconfig"}},[e._v("#")]),e._v(" defaultConfig")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Type:")]),e._v(" "),s("a",{attrs:{href:"#config"}},[s("code",[e._v("Config")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Read only")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Details:")])]),e._v(" "),s("p",[e._v("Property returning copy of the default configuration object.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("See also:")]),e._v(" "),s("a",{attrs:{href:"#config"}},[s("code",[e._v("Config")]),e._v(" data type description")])])])]),e._v(" "),s("h3",{attrs:{id:"new-tinycarousel-carouselelement-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-tinycarousel-carouselelement-config"}},[e._v("#")]),e._v(" new TinyCarousel( carouselElement, config )")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Arguments:")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("{HTMLElement} carouselElement")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#config"}},[s("code",[e._v("{Config} config <optional>")])])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns:")]),e._v(" New, uninitialized Tiny Carousel instance")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Usage:")])]),e._v(" "),s("p",[e._v("Carousel wrapper element should be passed ad "),s("code",[e._v("carouselElement")]),e._v(". Every of the "),s("code",[e._v("config")]),e._v(" properties (and the argument itself) are optional - if no "),s("code",[e._v("config.items")]),e._v(" passed the library will fallback to the value returned by "),s("a",{attrs:{href:"#carousel-findpossibleitems"}},[s("code",[e._v("carousel.findPossibleItems")]),e._v(" method")]),e._v(".")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("See also:")]),e._v(" "),s("a",{attrs:{href:"#config"}},[s("code",[e._v("Config")]),e._v(" data type description")])])])]),e._v(" "),s("h2",{attrs:{id:"instance-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instance-properties"}},[e._v("#")]),e._v(" Instance properties")]),e._v(" "),s("h3",{attrs:{id:"carousel-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#carousel-config"}},[e._v("#")]),e._v(" carousel.config")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Type:")]),e._v(" "),s("a",{attrs:{href:"#config"}},[s("code",[e._v("Config")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Details:")])]),e._v(" "),s("p",[e._v("Configuration object of the Tiny Carousel instance.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("See also:")]),e._v(" "),s("a",{attrs:{href:"#config"}},[s("code",[e._v("Config")]),e._v(" data type description")])])])]),e._v(" "),s("h3",{attrs:{id:"carousel-carouselelement"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#carousel-carouselelement"}},[e._v("#")]),e._v(" carousel.carouselElement")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Type:")]),e._v(" "),s("code",[e._v("HTMLElement")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Details:")])]),e._v(" "),s("p",[e._v("Main wrapper element of the carousel.")])])]),e._v(" "),s("h3",{attrs:{id:"carousel-active"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#carousel-active"}},[e._v("#")]),e._v(" carousel.active")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Type:")]),e._v(" "),s("code",[e._v("number")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Read only")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Details:")])]),e._v(" "),s("p",[e._v("Active slide index.")])])]),e._v(" "),s("h2",{attrs:{id:"instance-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instance-methods"}},[e._v("#")]),e._v(" Instance methods")]),e._v(" "),s("h3",{attrs:{id:"carousel-use"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#carousel-use"}},[e._v("#")]),e._v(" carousel.use")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Arguments:")])]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#plugin-definition"}},[s("code",[e._v("{PluginDefinition} pluginDefinition")])])]),e._v(" "),s("li",[s("code",[e._v("{unknown[]} ...args <optional>")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns:")]),e._v(" "),s("code",[e._v("this")]),e._v(" - this TinyCarousel instance (for chaining purposes)")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Usage:")])]),e._v(" "),s("p",[e._v("Method used to setup any of the Tiny Carousel plugins. Number of arguments and their types are dependent on what plugin is being installed. For details, head to the documentation of the plugin you’d like to use.")])])]),e._v(" "),s("h3",{attrs:{id:"carousel-init"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#carousel-init"}},[e._v("#")]),e._v(" carousel.init")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Arguments:")]),e._v(" None")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns:")]),e._v(" "),s("code",[e._v("this")]),e._v(" - this TinyCarousel instance (for chaining purposes)")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Usage:")])]),e._v(" "),s("p",[e._v("Initializes a TinyCarousel instance. Adds class names to the carousel wrapper and carousel items HTML elements. Also, this sets the correct active item index.")])])]),e._v(" "),s("h3",{attrs:{id:"carousel-goto"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#carousel-goto"}},[e._v("#")]),e._v(" carousel.goTo")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Arguments:")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("{number} index")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns:")]),e._v(" "),s("code",[e._v("this")]),e._v(" - this TinyCarousel instance (for chaining purposes)")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Usage:")])]),e._v(" "),s("p",[e._v("Method which allows to change the current slide.\n"),s("code",[e._v("index")]),e._v(" parameter should be "),s("strong",[e._v("any")]),e._v(" numeric value (even negated).")]),e._v(" "),s("ul",[s("li",[e._v("For "),s("code",[e._v("index")]),e._v(" values less than 0, the new active slide is counted from the end of items array. For example: when there are 3 slides and "),s("code",[e._v("carousel.goTo(-1)")]),e._v(" is called, the new active index will be 3 - because that’s the last index in the "),s("a",{attrs:{href:"#config"}},[s("code",[e._v("config.items")]),e._v(" array")])]),e._v(" "),s("li",[e._v("For "),s("code",[e._v("index")]),e._v(" values "),e._v("bigger"),e._v(" than the number of items or smaller than the negated number of items, number of items will be subtracted/added to the "),s("code",[e._v("index")]),e._v(" value. Whole operation will be repeated until "),s("code",[e._v("index")]),e._v(" is within the range from negated items array length to items array length")])])])]),e._v(" "),s("h3",{attrs:{id:"carousel-next"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#carousel-next"}},[e._v("#")]),e._v(" carousel.next")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Arguments:")]),e._v(" None")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns:")]),e._v(" same as "),s("a",{attrs:{href:"#carousel-goto"}},[s("code",[e._v("goTo")]),e._v(" method")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Usage:")])]),e._v(" "),s("p",[e._v("Syntax sugar for changing the active slide to the next one. Same as "),s("code",[e._v("carousel.goTo(carousel.active + 1)")]),e._v(".")])])]),e._v(" "),s("h3",{attrs:{id:"carousel-prev"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#carousel-prev"}},[e._v("#")]),e._v(" carousel.prev")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Arguments:")]),e._v(" None")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns:")]),e._v(" same as "),s("a",{attrs:{href:"#carousel-goto"}},[s("code",[e._v("goTo")]),e._v(" method")]),e._v(". Additionally, returns "),s("code",[e._v("false")]),e._v(" when "),s("a",{attrs:{href:"#carousel-active"}},[s("code",[e._v("carousel.active")])]),e._v(" equals 0")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Usage:")])]),e._v(" "),s("p",[e._v("Syntax sugar for changing the active slide to the previous one. Same as "),s("code",[e._v("carousel.goTo(carousel.active - 1)")]),e._v(".")])])]),e._v(" "),s("h3",{attrs:{id:"carousel-resetactive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#carousel-resetactive"}},[e._v("#")]),e._v(" carousel.resetActive")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Arguments:")]),e._v(" None")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns:")]),e._v(" "),s("code",[e._v("undefined")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Usage:")])]),e._v(" "),s("p",[s("strong",[e._v("Use with caution!")]),e._v(" This method is used for flushing of the cached "),s("a",{attrs:{href:"#carousel-active"}},[s("code",[e._v("carousel.active")])]),e._v(" value. It should be used whenever you need to force active index recalculation during next carousel operation.")])])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("To recalculate "),s("a",{attrs:{href:"#carousel-active"}},[s("code",[e._v("carousel.active")])]),e._v(" in place, call "),s("code",[e._v("carousel.resetActive")]),e._v(" and then try to access "),s("a",{attrs:{href:"#carousel-active"}},[s("code",[e._v("carousel.active")])]),e._v(" property. "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getter"),s("OutboundLink")],1),e._v(" will provide you with new value.")])]),e._v(" "),s("h3",{attrs:{id:"carousel-findpossibleitems"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#carousel-findpossibleitems"}},[e._v("#")]),e._v(" carousel.findPossibleItems")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Arguments:")]),e._v(" None")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Returns:")]),e._v(" "),s("code",[e._v("HTMLElement[]")]),e._v(" - an array of the possible slides. The return value is:")]),e._v(" "),s("ul",[s("li",[e._v("The "),s("code",[e._v("carouselElement")]),e._v(" children which have "),s("code",[e._v("config.itemClassName")]),e._v(" class name set,")]),e._v(" "),s("li",[e._v("(if the step above doesn’t find any item) all "),s("code",[e._v("carouselElement")]),e._v(" children")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Usage:")])]),e._v(" "),s("p",[e._v("Method which finds possible carousel items. Called as a item-gathering fallback by "),s("a",{attrs:{href:"#new-tinycarousel-carouselelement-config"}},[e._v("the constructor")]),e._v(".")])])]),e._v(" "),s("h2",{attrs:{id:"options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),s("h3",{attrs:{id:"config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[e._v("#")]),e._v(" Config")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Properties:")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("{number} active = 0")])]),e._v(" "),s("li",[s("code",[e._v('{string} className = "frs-tc"')])]),e._v(" "),s("li",[s("code",[e._v('{string} itemClassName = "frs-tc-item"')])]),e._v(" "),s("li",[s("code",[e._v('{string} hideScrollClassName - "frs-hide-scroll"')])]),e._v(" "),s("li",[s("code",[e._v("HTMLElement[] items = []")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Details:")])]),e._v(" "),s("p",[e._v("Data type which holds most of the Tiny Carousel configuration.")])])]),e._v(" "),s("h3",{attrs:{id:"plugindefinition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugindefinition"}},[e._v("#")]),e._v(" PluginDefinition")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Methods:")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("install( instance, args )")]),e._v(" - method called by "),s("a",{attrs:{href:"#carousel-use"}},[s("code",[e._v("carousel.use")])]),e._v(" during plugin installation")])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Details:")])]),e._v(" "),s("p",[e._v("Data type describing general interface which needs to be implemented by every plugin in the "),s("a",{attrs:{href:"../../ecosystem"}},[e._v("Tiny Carousel ecosystem.")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);