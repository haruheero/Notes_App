import React, { useState } from "react";
import {
  FormControl,
  Input,
} from "native-base";

//Issues
//1. Using passed props in useState


function InputField({label}) {
    const [formData, setData] = useState('')

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
          onChangeText={(value) => setData({ ...formData, [label.FirstName]: value })}
        />
        {console.log(formData)}
      </FormControl>
    </>
  );
}

export default InputField;
