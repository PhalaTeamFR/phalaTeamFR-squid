import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import {Account} from "./account.model"
import {MotionsVotes} from "./motionsVotes.model"

@Entity_()
export class CouncilMotions {
    constructor(props?: Partial<CouncilMotions>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: true})
    titleMotions!: string | undefined | null

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    propCreator!: Account | undefined | null

    @Column_("text", {nullable: true})
    proposalHash!: string | undefined | null

    @Column_("text", {nullable: true})
    proposalSource!: string | undefined | null

    @Column_("text", {nullable: true})
    eventSource!: string | undefined | null

    @Column_("int4", {nullable: true})
    threshold!: number | undefined | null

    @Column_("int4", {nullable: true})
    yesAfterThreshold!: number | undefined | null

    @Column_("int4", {nullable: true})
    noAfterThreshold!: number | undefined | null

    @OneToMany_(() => MotionsVotes, e => e.motionsId)
    votes!: MotionsVotes[]

    @Column_("timestamp with time zone", {nullable: true})
    startDate!: Date | undefined | null

    @Column_("timestamp with time zone", {nullable: true})
    lastUpdateDate!: Date | undefined | null

    @Column_("int4", {nullable: true})
    startblockHeight!: number | undefined | null

    @Column_("int4", {nullable: true})
    lastUpdateblockHeight!: number | undefined | null

    @Column_("text", {nullable: true})
    status!: string | undefined | null
}
