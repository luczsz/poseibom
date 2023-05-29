import { StyleSheet } from 'react-native';

import { theme } from '../../global/theme';
 
export const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.colors.primary,
        width: '100%',
        height: 120,
        borderRadius: 12,

        marginBottom: 8,

        flexDirection: 'row',
        
        justifyContent: 'space-between',
        alignItems: 'center',

        padding: 10,
    },

    imag:{
        width: 100,
        height: 90, 
        
        marginRight: 14
    },
    
    texs:{
        
        height: 100,
        flex: 1,
    },

    texs2:{
        height: 100,
        marginLeft: 10
    },

    title:{
        color: theme.colors.teste3,
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    subtitle:{
        color:'#ddd',
        fontSize: 14,
        textTransform: 'uppercase',
        margin:5,
    },
    subdtitle:{
        color: theme.colors.teste3,
        fontSize: 12,
        textAlign: 'justify'
    },

    promo:{
        backgroundColor: 'green',
        padding: 5,
        borderRadius: 12,
    },
    textPromo:{
        color: theme.colors.teste3,
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
})