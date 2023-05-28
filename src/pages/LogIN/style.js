import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';
 
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colors.primary,
        marginTop: 31,

        alignItems: 'center',
        justifyContent: 'center',

        paddingLeft: 14,
        paddingRight: 14,
    },

    //header
    logo:{
        width: '100%',
        
        padding: 10,

        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImage:{
        width: '100%',
        height: 62,
    },
    
    //content
    inputView:{
        width: '100%',
        marginTop: 14,

        alignItems: 'center',
        justifyContent: 'center',
    },

    input:{
        flexDirection: 'row',
        width: '90%',
        height: 60,
        marginBottom: 10,

        borderWidth: 1,
        borderColor: theme.colors.teste3,
        borderRadius: 12,

        alignItems: 'center',
        justifyContent: 'flex-start',

        paddingLeft: 14,
    },

    fogt:{
        width: '80%',
        alignItems: 'flex-end'
    },
    fogt2:{
        color: theme.colors.in,
        fontSize: 16,
    },

    submitView:{
        width: '80%',
        height: 80,

        alignItems: 'center',
        justifyContent: 'center',
    },
    
    submit:{
        backgroundColor: theme.colors.secondary,
        padding: 10,
        width: '90%',
        height: 50,

        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 12,
    },
    submitText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.teste3
    },

    //footer
    footer:{
        flexDirection: 'row',
    },

    text1:{
        fontSize: 16,
        color: theme.colors.teste3,
    },
    text2:{
        fontSize: 18,
        fontWeight: 'bold',
        color: theme.colors.secondary,
    }

})
