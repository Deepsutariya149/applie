import React, { useState } from "react";
import { hAndt } from "../../utiles/data";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Select } from "../../component";
function HAndT() {
  const [hAndtData, sethAndtData] = useState([{ value: "" }]);
  const initialValues = {
    hAndtValue: "",
  };
  const onSubmit = async (values, { resetForm }) => {
    console.log("value", values.hAndtValue);
    let arrayData = hAndtData;
    if (
      hAndtData[hAndtData.length - 1].value.charAt(
        hAndtData[hAndtData.length - 1].value.length - 1
      ) === values.hAndtValue
    ) {
      console.log("If");
      arrayData.push({ value: values.hAndtValue });
    } else {
      console.log("else");
      arrayData[hAndtData.length - 1].value = arrayData[
        hAndtData.length - 1
      ].value.concat(values.hAndtValue);
    }
    console.log("arrayData", arrayData);
    sethAndtData(arrayData);
    resetForm({ values: "" });
  };

  const validationSchema = Yup.object().shape({
    hAndtValue: Yup.string()
      .trim()
      .required("Please select value from dropdown"),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({
          touched,
          errors,
          values,
          setFieldValue,
          submitForm,
          resetForm,
        }) => (
          <Form className="h-100">
            <Select
              name="hAndtValue"
              label={"H And T Value"}
              error={touched.hAndtValue && errors.hAndtValue}
              onChange={(e) => setFieldValue("hAndtValue", e.target.value)}
              className="form-control mt-1  player-name-input-we-l"
              classNameLable="fn-14"
              optionsList={hAndt.optionList}
              emptyText={"Select Value"}
              classAddonOuter="f-1"
            />
            <Button title={"Submit"} classAddon="mr-3" onClick={submitForm} />
            {Array.isArray(hAndtData) &&
              hAndtData.length > 0 &&
              hAndtData.map((item) => {
                return <div>{item.value}</div>;
              })}
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default HAndT;
