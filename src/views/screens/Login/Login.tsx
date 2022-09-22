import {FC} from "react";
/** Styles */
import {StyledCard, StyledLoginContainer} from "./Login.styles";
/** Assets */
import BackgroundDesktop from "assets/images/login's-background-desktop.jpeg";
import BackgroundMobile from "assets/images/login's-background-mobile.jpeg";
/** Local Modules */
import useControllers from "controllers";
import useViews from "views";

const Login: FC = (): JSX.Element => {
    /** Controllers */
    const {useScreenHooks} = useControllers();
    const {useGeneral, useLogin} = useScreenHooks();
    const {width} = useGeneral();
    const {control, handleLogin, handleSubmit, isValid, setError} = useLogin();

    /** Views */
    const {useComponents} = useViews();
    const {Input, Button} = useComponents();

    return (
        <StyledLoginContainer
            background={width > 991 ? BackgroundDesktop : BackgroundMobile}>
            <StyledCard>
                <div className="flex w-full justify-center">
                    <img src="https://web.smartquick.com.co/wp-content/uploads/2020/10/Logo-SmartQuick-Negro.png" />
                </div>
                <Input
                    name="email"
                    placeholder="Correo Electronico"
                    control={control}
                    type="email"
                    icon="person_outline"
                    rules={{
                        required: {
                            value: true,
                            message: "El campo es requerido",
                        },
                    }}
                />
                <Input
                    name="password"
                    placeholder="Contraseña"
                    control={control}
                    type="password"
                    icon="key_outline"
                    rules={{
                        required: {
                            value: true,
                            message: "El campo es requerido",
                        }
                    }}
                />
                <div className="flex w-full justify-center">
                    <Button
                        action={handleSubmit(handleLogin)}
                        disabled={!isValid}>
                        Enviar
                    </Button>
                </div>
            </StyledCard>
        </StyledLoginContainer>
    );
};

export default Login;
