import { Avatar, Typography, useTheme } from "@material-ui/core";


const UserInformation: React.FunctionComponent = () => {
    const theme = useTheme();

    return (
        <>
            <Avatar src="" style={{ marginRight: theme.spacing(1) }}>
                NU
            </Avatar>
            <Typography noWrap={true}>
                Nome do Usuário
            </Typography>
        </>
    );
};

export default UserInformation;