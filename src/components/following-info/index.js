import React from "react";
import * as S from "./styled";

const FollowingInfo = ({ avatarImg, name}) => {
    return (
        <S.Wrapper>
            <S.WrapperImage src={avatarImg} alt="Avatar of user" />
            <S.WrapperName>username:</S.WrapperName>
            <S.WrapperLink href={`https://github.com/${name}`} target="_blank" rel="noopener noreferrer">{name}</S.WrapperLink>
        </S.Wrapper>
    )
}

export default FollowingInfo;