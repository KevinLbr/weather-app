import {StyleSheet} from 'react-native';

export const colors = {
    primaryColorConst : '#102B6D',
    secondaryColorConst : '#6ED4FF',
    thirdColorConst : '#E4EFFF',
    primaryGradientColorStartConst : '#FBA780',
    primaryGradientColorEndConst : '#FAA935',
    primaryGradientColorEndConst2 : '#F6CF67',
};

const styles = StyleSheet.create({
    primaryColor: {
        color: colors.primaryColorConst,
    },
    secondaryColor: {
        color: colors.secondaryColorConst,
    },
    thirdColor: {
        color: colors.thirdColorConst,
    },
    primaryGradientColorStart: {
        color: colors.primaryGradientColorStartConst,
    },
    primaryGradientColorEnd: {
        color: colors.primaryGradientColorEndConst,
    },
});

export default styles
