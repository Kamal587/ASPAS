import "./Form.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as yup from "yup";
import isEmail from "validator/lib/isEmail";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();

export function Form() {
  const [checked, setChecked] = useState(true);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form">
        <div className="form__field">
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Имя*"
            required
          />
        </div>
        <div class="form__field">
          <input
            type="email"
            className="input"
            name="name"
            placeholder="E-Mail"
          />
          <span className="form__error">
            Это поле должно содержать E-Mail в формате example@site.com
          </span>
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            className="check"
            name=""
            id=""
            defaultChecked={checked}
            onChange={() => setChecked(!checked)}
          />
          <span>Даю согласие на обработку Персональных данных</span>
        </div>

        <br />
        <button type="submit" className="btnCheck">
          Оставить заявку
        </button>
      </div>
    </form>
  );
}

export default Form;
