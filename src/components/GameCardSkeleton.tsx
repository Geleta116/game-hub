import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
    return (
        <Card borderRadius={10}>
            <Skeleton height={'200px'} width={'300px'}></Skeleton>
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    )
}

export default GameCardSkeleton