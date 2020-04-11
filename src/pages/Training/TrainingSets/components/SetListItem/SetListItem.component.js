"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var react_native_redash_1 = require("react-native-redash");
var react_native_reanimated_1 = require("react-native-reanimated");
var styled_components_1 = require("@woap/utils/styled-components");
var CopyIcon_1 = require("@woap/components/Icons/CopyIcon");
var TrashIcon_1 = require("@woap/components/Icons/TrashIcon");
var EditIcon_1 = require("@woap/components/Icons/EditIcon");
var Spacer_1 = require("@woap/components/Spacer");
var ICON_CONTAINER_SIZE = 32;
exports.SetListItem = function (_a) {
    var set = _a.set, onDrag = _a.onDrag, onPress = _a.onPress;
    var title = set.title, weight = set.weight, reps = set.reps, selected = set.selected;
    var transition = react_native_redash_1.useTimingTransition(selected, { duration: 200 });
    var translateY = react_native_redash_1.bInterpolate(transition, -48, 0);
    var height = react_native_redash_1.bInterpolate(transition, 0, 48);
    var opacity = react_native_reanimated_1.interpolate(transition, { inputRange: [0, 0.5, 1], outputRange: [0, 0, 1] });
    return (<>
      <ItemContainer selected={selected} onLongPress={onDrag} onPress={onPress}>
        <Title>{title}</Title>
        <FiguresContainer>
          <Data>
            <Figure>{reps}</Figure>
            <Label> reps</Label>
          </Data>
          <Data>
            <Figure>{weight}</Figure>
            <Label> kg</Label>
          </Data>
        </FiguresContainer>
      </ItemContainer>
      <OptionsContainer style={{ height: height, transform: [{ translateY: translateY }], opacity: opacity }}>
        <IconContainer>
          <CopyIcon_1.CopyIcon />
        </IconContainer>
        <Spacer_1.Spacer width={2}/>
        <IconContainer>
          <EditIcon_1.EditIcon />
        </IconContainer>
        <Separator />
        <IconContainer>
          <TrashIcon_1.TrashIcon />
        </IconContainer>
      </OptionsContainer>
    </>);
};
var ItemContainer = styled_components_1["default"].TouchableOpacity(function (_a) {
    var theme = _a.theme, selected = _a.selected;
    return (__assign(__assign({ flex: 1, borderRadius: theme.border.radius.s, padding: theme.margin.x1 }, theme.shadow), { backgroundColor: theme.colors.white, zIndex: 1, borderWidth: selected ? 2 : 0 }));
});
var OptionsContainer = styled_components_1["default"](react_native_reanimated_1["default"].View)(function (_a) {
    var theme = _a.theme;
    return ({
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flex: 1,
        marginTop: theme.margin.x2
    });
});
var Title = styled_components_1["default"].Text(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign({ flex: 1 }, theme.fonts.h5), { fontWeight: 'bold', paddingHorizontal: theme.margin.x1, paddingBottom: theme.margin.x1 }));
});
var FiguresContainer = styled_components_1["default"].View(function (_a) {
    var theme = _a.theme;
    return ({
        flexDirection: 'row',
        paddingTop: theme.margin.x1,
        borderTopColor: theme.colors.transparentBlackScale[20],
        borderTopWidth: 1
    });
});
var Data = styled_components_1["default"].Text({ textAlign: 'center', flex: 1 });
var Figure = styled_components_1["default"].Text(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign({}, theme.fonts.h1), { fontWeight: 'bold' }));
});
var Label = styled_components_1["default"].Text(function (_a) {
    var theme = _a.theme;
    return (__assign(__assign({}, theme.fonts.h5), { fontWeight: 'bold' }));
});
var IconContainer = styled_components_1["default"].TouchableOpacity({
    height: ICON_CONTAINER_SIZE,
    width: ICON_CONTAINER_SIZE,
    borderRadius: ICON_CONTAINER_SIZE / 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
});
var Separator = styled_components_1["default"].View({ flex: 1 });
