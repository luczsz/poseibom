import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';
 
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colors.primary,
        marginTop: 31,

        alignItems: 'center',

    },
    
    header:{
        borderBottomWidth: 1,
        width: '100%',
        height: 80,
        flexDirection: 'row',

        alignItems: 'center',
        justifyContent: 'flex-start',

        paddingLeft: 14,
        paddingRight: 14,
    },
    
    backBnt:{
        backgroundColor: theme.colors.teste3,
        width: 50,
        height: 50,
        borderRadius: 12,

        padding: 10,

        alignItems: 'center',
        justifyContent: 'center',

        marginRight: 10,
    },
    
    inputs:{
        flex: 1,
        width: '100%',
        marginTop: 14,

        alignItems: 'center',
        
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

    submitView:{
        padding: 10,
        width: '100%',
        height: 60,

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


    footer:{
        flexDirection: 'row',
        height: '10%',
        width: '80%',
        
        alignItems: 'center',
        justifyContent: 'center',
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
