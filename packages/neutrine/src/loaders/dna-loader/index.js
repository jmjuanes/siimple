//Import dependencies
import React from "react";

//Import styles
import "./style.scss";

//DNA loader component
export const DNALoader = function (props) {
    //Generate all the nucleotides
    let children = Array.apply(null, Array(10)).map(function (value, index) {
        //Initialize the nucleotide props
        let nucleotideProps = {
            "className": "neutrine-dna-loader-nucleotide",
            "key": index
        };
        //Return the nucleotide
        return React.createElement("div", nucleotideProps, React.createElement("div", {}, null));
    });
    //Class list
    let classList = ["neutrine-dna-loader"];
    //Check the DNA-loader color property 
    if (typeof props.color === "string") {
        classList.push("neutrine-dna-loader--" + props.color);
    }
    //Check for DNA stick property
    if (typeof props.stick === "boolean" && props.stick === true) {
        classList.push("neutrine-dna-loader--stick");
    }
    //Return the loader wrapper
    return React.createElement("div", {"className": classList.join(" ")}, children);
}

//DNA Loader default props
DNALoader.defaultProps = {
    "stick": true,
    "color": null
};

