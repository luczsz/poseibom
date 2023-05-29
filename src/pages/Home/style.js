import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';
 
export const styles = StyleSheet.create({

    container:{
        backgroundColor: theme.colors.primary,
        flex: 1,
        marginTop: 29,
    },

    header:{
        width: '100%',
        height: 95,
        flexDirection: 'row',
        borderRadius: 8,
        
        borderBottomWidth: 2,
        borderColor: theme.colors.teste3,

        alignItems: 'center',
        justifyContent: 'space-between',
        
        paddingLeft: 14,
        paddingRight: 14,
    },

    names:{},
    names1:{
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.teste3,
    },
    names2:{
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.colors.teste3,
    },

    bntsHeader:{},
    account:{
        backgroundColor: theme.colors.teste3,
        padding: 14,
        
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 22,
    },


    
    content:{
        flex: 1,
        backgroundColor: theme.colors.in,

        alignItems: 'center',

        paddingTop: 20,
        paddingLeft: 14,
        paddingRight: 14,
        
    },
    footer:{
        backgroundColor: 'yellow',

    },

})
