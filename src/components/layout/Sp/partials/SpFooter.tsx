const SpFooter = () => {

    const SECONDARY_LINKS = [
        {
          href: '/terms',
          text: 'Terms',
        },
        {
          href: '/privacy',
          text: 'Privacy',
        },
      ]

    return (
        <div className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            {/* <div className="flex items-center flex-shrink-0 text-white mr-6">
                Disclamer
            </div> */}
        </div>
    )
}

export default SpFooter;