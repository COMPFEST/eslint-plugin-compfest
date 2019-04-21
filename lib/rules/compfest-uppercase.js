/**
 * @fileoverview COMPFEST
 * @author Raihan Ramadistra
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "COMPFEST",
            category: "Copywriting",
            recommended: true
        },
        fixable: "code",  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
          Literal: function(node) {
            if (!(node.value && node.value.match)) return;
            const pattern = /com(p)?fest/gi;
            const matches = node.value.match(pattern).filter(match => match !== "COMPFEST");
            if (!matches.length) return;
            context.report({
              node, 
              message: `Replace ${matches.join(", ")} with COMPFEST.`, 
              fix(fixer) {
                  return fixer.replaceText(node, context.getSourceCode().getText(node).replace(pattern, "COMPFEST"))
              },
            });
          }
        };
    }
};
