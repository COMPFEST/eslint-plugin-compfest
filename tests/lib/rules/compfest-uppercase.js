/**
 * @fileoverview COMPFEST
 * @author Raihan Ramadistra
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/compfest-uppercase"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("compfest-uppercase", rule, {

    valid: [
        "message = 'Welcome to COMPFEST!'",
        "test()",
        "null",
        "1",
        "1 + 1",
        "false"
    ],

    invalid: [
      {
        code: "message = \"Welcome to Compfest!\";",
        output: "message = \"Welcome to COMPFEST!\";",
        errors: [{
            message: "Replace Compfest with COMPFEST.",
        }]
      },
      {
        code: "message = \"Welcome to Compfest & compfest!\";",
        output: "message = \"Welcome to COMPFEST & COMPFEST!\";",
        errors: [{
            message: "Replace Compfest, compfest with COMPFEST.",
        }]
      },
      {
        code: "message = { title: 'Compfest Grand Launching' };",
        output: "message = { title: 'COMPFEST Grand Launching' };",
        errors: [{
            message: "Replace Compfest with COMPFEST.",
        }]
      },
      {
        code: "message = { title: 'Comfest Grand Launching' };",
        output: "message = { title: 'COMPFEST Grand Launching' };",
        errors: [{
            message: "Replace Comfest with COMPFEST.",
        }]
      },
    ]
});
