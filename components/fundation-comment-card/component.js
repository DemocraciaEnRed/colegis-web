import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledCommentItem = styled.div`
  min-height:15rem;
  border: solid 1px #dae1e7;
  padding:1.6rem;
  display:flex;
  margin-bottom:2rem;
  `
const Comment = styled.div`
  font-size: 1.4rem;
  line-height: 1.57;
  color: #181818;
`

const Date = styled.div`
  height: 16px;
  font-size: 1.4rem;
  color: #9b9b9b;
  padding-top:2rem;
  margin-top:auto;
  margin-bottom:1.5rem;

`
const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius:50%;
  background-image: url('${(props) => props.avatarImg}');
  background-size: cover;
  background-position: center;
  `

const Username = styled.div`
  color: #2d4b5e;
  font-size: 1.4rem;
  font-family:var(--bold);
  padding-bottom:0.5rem;`

const Charge = styled.div`
  font-size:1.2rem;
  color:  #5c97bc;
  text-transform:uppercase;
  padding-bottom:1rem;`

const TextWrapper = styled.div`
  margin-left:2rem;
  width:90%;
`

class FundationCommentCard extends Component {
  state = {
    liked: false
  }

  componentDidMount () {
    console.log(this.props.comment)
  }

  render () {
    const { comment } = this.props
    return (
      <StyledCommentItem>
        <UserAvatar avatarImg={comment.user.avatar || '/static/assets/userdefault.png'} />
        <TextWrapper>
          <Username>{comment.user.fullname}</Username>
          <Charge>{''}</Charge>
          <Comment>{comment.content}</Comment>
          <Date>{`Hace ${comment.when}`}</Date>
        </TextWrapper>
      </StyledCommentItem>
    )
  }
}

FundationCommentCard.propTypes = {
  comment: PropTypes.object.isRequired
}

export default FundationCommentCard
