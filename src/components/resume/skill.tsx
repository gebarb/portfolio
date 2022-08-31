import React from 'react'
import Skill from '../../models/skill'

export const SkillBox: React.FC<Skill> = props => (
    <div>
        <span className="font-weight-bold">{props.name}</span>
        <br />
        <span className="font-weight-normal">{props.list}</span>
        <br />
        <br />
    </div>
)

export default SkillBox
