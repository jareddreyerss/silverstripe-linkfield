<?php declare(strict_types=1);

namespace SilverStripe\LinkField\Models;

use SilverStripe\Forms\FieldList;

/**
 * A link to a phone number
 */
class PhoneLink extends Link
{
    private static string $table_name = 'LinkField_PhoneLink';

    private static array $db = [
        'Phone' => 'Varchar(255)',
    ];

    /**
     * Set the priority of this link type in the CMS menu
     */
    private static int $menu_priority = 40;
    
    private static $icon = 'font-icon-mobile';

    public function getCMSFields(): FieldList
    {
        $this->beforeUpdateCMSFields(function (FieldList $fields) {
            $linkField = $fields->dataFieldByName('Phone');
            $linkField->setTitle(_t(__CLASS__ . '.PHONE_FIELD', 'Phone'));
        });
        return parent::getCMSFields();
    }

    public function getDescription(): string
    {
        return $this->Phone ?: '';
    }

    public function getURL(): string
    {
        return $this->Phone ? sprintf('tel:%s', $this->Phone) : '';
    }

    /**
     * The title that will be displayed in the dropdown
     * for selecting the link type to create.
     */
    public function getMenuTitle(): string
    {
        return _t(__CLASS__ . '.LINKLABEL', 'Phone number');
    }
}
