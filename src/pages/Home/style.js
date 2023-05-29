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
        borderRadius: 12,
        
        borderBottomWidth: 2,
        borderColor: theme.colors.teste3,

        alignItems: 'center',
        justifyContent: 'space-between',
        
        paddingLeft: 14,
        paddingRight: 14,
    },

    names:{},
    bntsHeader:{},
    account:{},


    
    content:{
        flex: 1,
        backgroundColor: 'red',
        
    },
    footer:{
        backgroundColor: 'yellow',

    },

})
