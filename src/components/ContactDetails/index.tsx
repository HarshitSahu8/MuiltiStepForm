import React from "react";
// import Textfield from "@components/Textfield";
import { contactData } from "src/constant/texfieldLayoutData";
import { Box } from "@mui/material";
import Button from "@components/Button";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { TextField } from "@mui/material";

const { heading, textData, button } = contactData;
const ContactForm = () => {
    const { handleSubmit, control, register, formState, watch, setValue } =
        useForm();
    const { errors } = formState;

    return (
        <Box>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <h3>{heading}</h3>
                {textData.map(({ label, name, autoFocus, rules }, idx) => (
                    <Controller
                        control={control}
                        defaultValue=""
                        name={name}
                        rules={rules}
                        render={({
                            field: { onChange, value },
                            fieldState: { error },
                        }) => (
                            <TextField
                                sx={{
                                    margin: "2%",
                                    width: "100%",
                                }}
                                label={label}
                                variant="standard"
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error?.message}
                                autoFocus={autoFocus}
                            />
                        )}
                    />
                ))}
                {
                    <Link href="/personal">
                        <a>
                            <Button label={button.label} type="submit" />
                        </a>
                    </Link>
                }
            </form>
        </Box>
    );
};

export { ContactForm };
