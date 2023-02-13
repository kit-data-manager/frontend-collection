(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['reporesult_detailed'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "                        <a class=\"ui green right corner label\">\r\n                            <i class=\"lock open icon\"></i>\r\n                        </a>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                        <a class=\"ui red right corner label\">\r\n                            <i class=\"lock icon\"></i>\r\n                        </a>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return container.escapeExpression(((helper = (helper = lookupProperty(helpers,"givenName") || (depth0 != null ? lookupProperty(depth0,"givenName") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"givenName","hash":{},"data":data,"loc":{"start":{"line":33,"column":61},"end":{"line":33,"column":74}}}) : helper)));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        <i>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"descriptions") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"description") : stack1), depth0))
    + "</i>\r\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "                        <i>No description available</i>\r\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <i>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"rights") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"schemaId") : stack1), depth0))
    + "</i>\r\n";
},"13":function(container,depth0,helpers,partials,data) {
    return "                                <i>No license assigned</i>\r\n";
},"15":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"ui fluid divided list\" style=\"margin-left: 10px\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"relatedIdentifiers") : stack1),{"name":"each","hash":{},"fn":container.program(16, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":101,"column":32},"end":{"line":108,"column":41}}})) != null ? stack1 : "")
    + "                            </div>\r\n";
},"16":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <div class=\"item\">\r\n                                        <div class=\"content\">\r\n                                            <a class=\"header\" href='"
    + alias4(((helper = (helper = lookupProperty(helpers,"value") || (depth0 != null ? lookupProperty(depth0,"value") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":104,"column":68},"end":{"line":104,"column":77}}}) : helper)))
    + "'>"
    + alias4((lookupProperty(helpers,"splitUrl")||(depth0 && lookupProperty(depth0,"splitUrl"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"value") : depth0),{"name":"splitUrl","hash":{},"data":data,"loc":{"start":{"line":104,"column":79},"end":{"line":104,"column":97}}}))
    + "</a>\r\n                                            <div class=\"description\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"relationType") || (depth0 != null ? lookupProperty(depth0,"relationType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"relationType","hash":{},"data":data,"loc":{"start":{"line":105,"column":69},"end":{"line":105,"column":85}}}) : helper)))
    + "</div>\r\n                                        </div>\r\n                                    </div>\r\n";
},"18":function(container,depth0,helpers,partials,data) {
    return "                            <i style=\"padding-left: 20px\">No related identifiers provided.</i>\r\n";
},"20":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"content") : stack1),{"name":"each","hash":{},"fn":container.program(21, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":124,"column":28},"end":{"line":134,"column":37}}})) != null ? stack1 : "");
},"21":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, alias4="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                <div class=\"ui fluid list\" style=\"margin-left: 10px\">\r\n                                    <div class=\"item\">\r\n                                        <div class=\"content\">\r\n                                            <div class=\"header\"><a href='"
    + alias3((lookupProperty(helpers,"contentLink")||(depth0 && lookupProperty(depth0,"contentLink"))||alias2).call(alias1,depth0,{"name":"contentLink","hash":{},"data":data,"loc":{"start":{"line":128,"column":73},"end":{"line":128,"column":93}}}))
    + "'\r\n                                                                   target='_blank'>"
    + alias3(((helper = (helper = lookupProperty(helpers,"relativePath") || (depth0 != null ? lookupProperty(depth0,"relativePath") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"relativePath","hash":{},"data":data,"loc":{"start":{"line":129,"column":83},"end":{"line":129,"column":99}}}) : helper)))
    + "</a></div>\r\n                                            <div class=\"description\">"
    + alias3(((helper = (helper = lookupProperty(helpers,"hash") || (depth0 != null ? lookupProperty(depth0,"hash") : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"hash","hash":{},"data":data,"loc":{"start":{"line":130,"column":69},"end":{"line":130,"column":77}}}) : helper)))
    + "</div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n";
},"23":function(container,depth0,helpers,partials,data) {
    return "                            <i style=\"padding-left: 20px\">No content uploaded, yet.</i>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.lambda, alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"ui divider\"></div>\r\n<div class=\"ui padded grid\">\r\n\r\n    <div class=\"fourteen wide column\">\r\n        <div class=\"ui segment\">\r\n        <div class=\"ui padded grid\">\r\n            <!--row-->\r\n            <div class=\"ui row\">\r\n                <div class=\"ui fluid image\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(lookupProperty(helpers,"isOpen")||(depth0 && lookupProperty(depth0,"isOpen"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"read") : stack1),{"name":"isOpen","hash":{},"data":data,"loc":{"start":{"line":10,"column":26},"end":{"line":10,"column":47}}}),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":10,"column":20},"end":{"line":18,"column":27}}})) != null ? stack1 : "")
    + "                </div>\r\n                <div class=\"ten wide column\">\r\n                    <h3 class=\"ui header\">"
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"titles") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</h3>\r\n                </div>\r\n                <div class=\"five wide column\">\r\n                    <a class=\"ui fluid blue label\">\r\n                        "
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"resourceType") : stack1)) != null ? lookupProperty(stack1,"typeGeneral") : stack1), depth0))
    + "\r\n                        <div class=\"detail\">"
    + alias4(alias3(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"resourceType") : stack1)) != null ? lookupProperty(stack1,"value") : stack1), depth0))
    + "</div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <!--row-->\r\n            <div class=\"ui row\">\r\n                <div class=\"column\">\r\n                    <span>"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"creators") : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":26},"end":{"line":33,"column":83}}})) != null ? stack1 : "")
    + "</span>\r\n                </div>\r\n                <div class=\"four wide column\">\r\n                </div>\r\n            </div>\r\n            <!--row-->\r\n            <div class=\"ui row\">\r\n                <div class=\"column\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"descriptions") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"description") : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data,"loc":{"start":{"line":41,"column":20},"end":{"line":45,"column":27}}})) != null ? stack1 : "")
    + "                </div>\r\n\r\n\r\n            </div>\r\n            <!--row-->\r\n            <div class=\"ui row\">\r\n                <div class=\"six wide column\">\r\n                    <div class=\"ui fluid label\">\r\n                        Created at:\r\n                        <div class=\"detail\">"
    + alias4((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"created") : stack1),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":55,"column":44},"end":{"line":55,"column":74}}}))
    + "</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"three wide column\">\r\n                    <div class=\"ui fluid label\">\r\n                        Publisher:\r\n                        <div class=\"detail\">"
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"publisher") : stack1), depth0))
    + "</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"three wide column\">\r\n                    <div class=\"ui fluid label\">\r\n                        License:\r\n                        <div class=\"detail\">\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"rights") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"schemaId") : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":68,"column":28},"end":{"line":72,"column":35}}})) != null ? stack1 : "")
    + "                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--row-->\r\n            <div class=\"ui row\">\r\n                <div class=\"five wide column\">\r\n                    <div class=\"ui fluid label\">\r\n                        Last update:\r\n                        <div class=\"detail\">"
    + alias4((lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"lastUpdate") : stack1),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":82,"column":44},"end":{"line":82,"column":77}}}))
    + "</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"four wide column\">\r\n                    <div class=\"ui fluid label\">\r\n                        Publication Year:\r\n                        <div class=\"detail\">"
    + alias4(alias3(((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"publicationYear") : stack1), depth0))
    + "</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!--row-->\r\n            <div class=\"ui row\">\r\n                <div class=\"column\">\r\n                    <div class=\"ui segment\">\r\n                        <a class=\"ui left corner label\">\r\n                            <i class=\"linkify icon\"></i>\r\n                        </a>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"metadata") : stack1)) != null ? lookupProperty(stack1,"relatedIdentifiers") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"value") : stack1),{"name":"if","hash":{},"fn":container.program(15, data, 0),"inverse":container.program(18, data, 0),"data":data,"loc":{"start":{"line":99,"column":24},"end":{"line":112,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"ui row\">\r\n                <div class=\"column\">\r\n                    <div class=\"ui segment\">\r\n                        <a class=\"ui left corner label\">\r\n                            <i class=\"file icon\"></i>\r\n                        </a>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? lookupProperty(depth0,"_source") : depth0)) != null ? lookupProperty(stack1,"content") : stack1)) != null ? lookupProperty(stack1,"0") : stack1)) != null ? lookupProperty(stack1,"relativePath") : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0),"inverse":container.program(23, data, 0),"data":data,"loc":{"start":{"line":123,"column":24},"end":{"line":137,"column":31}}})) != null ? stack1 : "")
    + "                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n        <div class=\"two wide column\">\r\n            <a href=\"\"><i class=\"download icon\"></i> JSON</a>\r\n            <a href=\"\"><i class=\"download icon\"></i> ZIP</a>\r\n        </div>\r\n    </div>\r\n\r\n";
},"useData":true});
})();