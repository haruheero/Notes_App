import React, { useState } from "react";
import {
  FormControl,
  Input,
} from "native-base";

//Issues
//1. Using passed props in useState


function InputField({label}) {
    const [labelData, setData] = useState([])
  return (
    <>
      <FormControl>
        <FormControl.Label
          _text={{
            fontSize: "lg",
            color: "black",
          }}
        >
          {label}
        </FormControl.Label>

        <Input
          borderBottomColor="#775700"
          variant="underlined"
          name="emailID"
          onChangeText={(value) => 
            {
              setData(labelData =>({...labelData, [label]:value}))
            }
          }
        />
        
          {console.log(labelData)}
      </FormControl>
    </>
  );
}

export default InputField;
