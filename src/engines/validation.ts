import Ajv from "ajv";

const ajv = new Ajv({ strict: false });

const validator = (schema: any, data: any, error: any) => {
  const valid = ajv.validate(schema, data);
  if (!valid)
    error(ajv.errors!.map(({ message }) => message).join(",\n"));

	return valid;
}

export default validator;